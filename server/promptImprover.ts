import type {
  ImprovePromptErrorResponse,
  ImprovePromptResponse,
} from '../src/types/promptImprover'

const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash'
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`

const responseSchema = {
  type: 'object',
  properties: {
    improvedPrompt: {
      type: 'string',
    },
    whyItsBetter: {
      type: 'array',
      items: {
        type: 'string',
      },
      minItems: 2,
      maxItems: 4,
    },
    tips: {
      type: 'array',
      items: {
        type: 'string',
      },
      minItems: 2,
      maxItems: 4,
    },
  },
  required: ['improvedPrompt', 'whyItsBetter', 'tips'],
} as const

function getPromptInstruction(rawPrompt: string) {
  return [
    'You are helping NorthFluent AI, a beginner friendly AI education platform.',
    'Improve the user prompt using this framework: Task + Context + Audience + Format + Constraints.',
    'Keep the improved prompt practical, specific, and easy for a beginner to reuse.',
    'Format the improved prompt with clear labels for Task, Context, Audience, Format, and Constraints.',
    'Include tone under Constraints if tone is important for the request.',
    'Write short, clear explanation bullets that teach the beginner what changed.',
    'Write short, clear tips that help the beginner write stronger prompts next time.',
    'Do not use hype, jargon, or overly technical language.',
    `User prompt: ${rawPrompt}`,
  ].join('\n')
}

function isValidResponse(data: unknown): data is ImprovePromptResponse {
  if (!data || typeof data !== 'object') {
    return false
  }

  const candidate = data as ImprovePromptResponse

  return (
    typeof candidate.improvedPrompt === 'string' &&
    Array.isArray(candidate.whyItsBetter) &&
    candidate.whyItsBetter.every((item) => typeof item === 'string') &&
    Array.isArray(candidate.tips) &&
    candidate.tips.every((item) => typeof item === 'string')
  )
}

export function createJsonResponse(
  body: ImprovePromptResponse | ImprovePromptErrorResponse,
  status = 200,
) {
  return Response.json(body, { status })
}

export async function improvePromptWithGemini(rawPrompt: string) {
  const apiKey = process.env.GEMINI_API_KEY

  if (!apiKey) {
    throw new Error('Missing GEMINI_API_KEY.')
  }

  const geminiResponse = await fetch(GEMINI_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-goog-api-key': apiKey,
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: getPromptInstruction(rawPrompt),
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.4,
        responseMimeType: 'application/json',
        responseJsonSchema: responseSchema,
      },
    }),
  })

  if (!geminiResponse.ok) {
    const errorText = await geminiResponse.text()
    throw new Error(`Gemini request failed: ${errorText}`)
  }

  const geminiPayload = (await geminiResponse.json()) as {
    candidates?: Array<{
      content?: {
        parts?: Array<{
          text?: string
        }>
      }
    }>
  }

  const rawText = geminiPayload.candidates?.[0]?.content?.parts?.[0]?.text

  if (!rawText) {
    throw new Error('Gemini did not return any prompt improvement content.')
  }

  const parsed = JSON.parse(rawText) as unknown

  if (!isValidResponse(parsed)) {
    throw new Error('Gemini returned an unexpected response shape.')
  }

  return parsed
}

export async function handlePromptImproverRequest(request: Request) {
  if (request.method !== 'POST') {
    return createJsonResponse({ error: 'Method not allowed.' }, 405)
  }

  let body: { rawPrompt?: unknown }

  try {
    body = (await request.json()) as { rawPrompt?: unknown }
  } catch {
    return createJsonResponse({ error: 'Request body must be valid JSON.' }, 400)
  }

  const rawPrompt =
    typeof body.rawPrompt === 'string' ? body.rawPrompt.trim() : ''

  if (!rawPrompt) {
    return createJsonResponse(
      { error: 'Please enter a prompt before improving it.' },
      400,
    )
  }

  try {
    const result = await improvePromptWithGemini(rawPrompt)
    return createJsonResponse(result)
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : 'Something went wrong while improving the prompt.'

    return createJsonResponse({ error: message }, 500)
  }
}
