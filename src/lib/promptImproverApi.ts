import type {
  ImprovePromptErrorResponse,
  ImprovePromptRequest,
  ImprovePromptResponse,
} from '../types/promptImprover'

export async function requestImprovedPrompt(
  payload: ImprovePromptRequest,
): Promise<ImprovePromptResponse> {
  if (window.location.hostname.endsWith('github.io')) {
    throw new Error(
      'The Prompt Tool needs a server endpoint for Gemini. GitHub Pages is static hosting, so this tool works locally with npm run dev or on a host that supports server functions.',
    )
  }

  const response = await fetch('/api/improve-prompt', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const responseText = await response.text()
  const contentType = response.headers.get('content-type') || ''

  if (!responseText.trim()) {
    throw new Error(
      'The Prompt Improver API returned an empty response. Make sure the local dev server is running and try again.',
    )
  }

  let data: ImprovePromptResponse | ImprovePromptErrorResponse

  try {
    data = JSON.parse(responseText) as
      | ImprovePromptResponse
      | ImprovePromptErrorResponse
  } catch {
    if (contentType.includes('text/html') || responseText.includes('<!doctype html')) {
      throw new Error(
        'The Prompt Improver API route is not available in this server. Restart the Vite dev server and try again.',
      )
    }

    throw new Error(
      'The Prompt Improver API returned a response that was not valid JSON.',
    )
  }

  if (!response.ok) {
    throw new Error(
      'error' in data ? data.error : 'Something went wrong while improving the prompt.',
    )
  }

  if ('error' in data) {
    throw new Error(data.error)
  }

  return data
}
