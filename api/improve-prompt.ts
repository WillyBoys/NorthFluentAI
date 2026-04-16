import { handlePromptImproverRequest } from '../server/promptImprover'

export default async function handler(request: Request) {
  return handlePromptImproverRequest(request)
}
