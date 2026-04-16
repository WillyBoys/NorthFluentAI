export type ImprovePromptRequest = {
  rawPrompt: string
}

export type ImprovePromptResponse = {
  improvedPrompt: string
  whyItsBetter: string[]
  tips: string[]
}

export type ImprovePromptErrorResponse = {
  error: string
}
