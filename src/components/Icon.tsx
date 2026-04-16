export type IconName =
  | 'school'
  | 'work'
  | 'creative'
  | 'tools'
  | 'basics'
  | 'prompt'
  | 'judgment'
  | 'responsible'
  | 'algorithm'
  | 'data'
  | 'model'
  | 'compute'
  | 'human'
  | 'chat'
  | 'media'
  | 'recommend'
  | 'cloud'
  | 'robot'
  | 'strategy'
  | 'warning'
  | 'growth'
  | 'mission'
  | 'confidence'
  | 'clarity'

type IconProps = {
  name: IconName
}

const paths: Record<IconName, string[]> = {
  school: ['M4 8l8-4 8 4-8 4-8-4z', 'M7 10v5c2.8 2 7.2 2 10 0v-5'],
  work: ['M7 7V5h10v2', 'M4 8h16v10H4z', 'M9 12h6'],
  creative: ['M12 3v3', 'M5.6 5.6l2.1 2.1', 'M18.4 5.6l-2.1 2.1', 'M8 14a4 4 0 118 0c0 1.7-1 2.6-1.8 3.3-.5.4-.7.9-.7 1.7h-3c0-.8-.2-1.3-.7-1.7C9 16.6 8 15.7 8 14z', 'M10 21h4'],
  tools: ['M5 6h14', 'M7 12h10', 'M9 18h6', 'M6 6v12', 'M18 6v12'],
  basics: ['M5 5h14v14H5z', 'M8 9h8', 'M8 13h5'],
  prompt: ['M4 5h16v14H4z', 'M7 9l3 3-3 3', 'M12 15h5'],
  judgment: ['M12 4v16', 'M6 8h12', 'M8 8l-3 6h6L8 8z', 'M16 8l-3 6h6l-3-6z'],
  responsible: ['M12 3l7 4v5c0 4-2.8 7.2-7 9-4.2-1.8-7-5-7-9V7l7-4z', 'M9 12l2 2 4-5'],
  algorithm: ['M6 6h4v4H6z', 'M14 6h4v4h-4z', 'M10 8h4', 'M8 10v4', 'M16 10v4', 'M6 14h12v4H6z'],
  data: ['M5 7c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7-1.3-7-3z', 'M5 7v5c0 1.7 3.1 3 7 3s7-1.3 7-3V7', 'M5 12v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5'],
  model: ['M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z', 'M12 12l8-4.5', 'M12 12v9', 'M12 12L4 7.5'],
  compute: ['M5 6h14v10H5z', 'M9 20h6', 'M12 16v4'],
  human: ['M12 11a4 4 0 100-8 4 4 0 000 8z', 'M5 21a7 7 0 0114 0'],
  chat: ['M5 5h14v10H8l-3 3V5z', 'M8 9h8', 'M8 12h5'],
  media: ['M4 6h16v12H4z', 'M10 10l5 2-5 2v-4z'],
  recommend: ['M5 12h4l2-6 4 12 2-6h2', 'M4 20h16'],
  cloud: ['M8 18h9a4 4 0 00.6-8A6 6 0 006 11a3.5 3.5 0 002 7z'],
  robot: ['M7 8h10v9H7z', 'M9 12h.1', 'M15 12h.1', 'M10 16h4', 'M12 8V4', 'M8 21h8'],
  strategy: ['M5 18l5-5 4 4 5-8', 'M14 9h5v5'],
  warning: ['M12 4l9 16H3L12 4z', 'M12 9v5', 'M12 17h.1'],
  growth: ['M5 19c8 0 12-6 14-14-8 2-14 6-14 14z', 'M5 19c3-4 7-7 12-9'],
  mission: ['M12 21s7-4.4 7-11V5l-7-2-7 2v5c0 6.6 7 11 7 11z', 'M9 12l2 2 4-5'],
  confidence: ['M12 3l3 6 6 .8-4.4 4.2 1.1 6-5.7-2.9L6.3 20l1.1-6L3 9.8 9 9l3-6z'],
  clarity: ['M4 5h16', 'M4 12h10', 'M4 19h7', 'M17 14l3 3-3 3'],
}

export default function Icon({ name }: IconProps) {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      {paths[name].map((path) => (
        <path key={path} d={path} />
      ))}
    </svg>
  )
}
