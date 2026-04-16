export const promptFramework = [
  {
    title: 'Task',
    description: 'Say exactly what you want the AI to do.',
  },
  {
    title: 'Context',
    description: 'Add the situation, audience, or goal behind the request.',
  },
  {
    title: 'Audience',
    description: 'Name who the answer is for so the response matches the right level.',
  },
  {
    title: 'Format',
    description: 'Ask for bullets, steps, a table, a paragraph, examples, or a draft.',
  },
  {
    title: 'Constraints',
    description: 'Mention limits like length, tone, deadline, sources, or what to avoid.',
  },
] as const

export const promptFrameworkFormula =
  'Task + Context + Audience + Format + Constraints'
