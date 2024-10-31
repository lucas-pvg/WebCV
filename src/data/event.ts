interface Duration {
  value: number
  metric: string
}

interface EventJSON {
  label: string
  institution: string
  year_start: number
  year_end: number
  duration?: Duration
  description: string
}

export interface EventInterface {
  label: string
  institution: string
  yearStart: number
  yearEnd: number
  duration?: Duration
  description: string
}

export function eventMapper(data: EventJSON): EventInterface {
  return {
    label: data.label,
    institution: data.institution,
    yearStart: data.year_start,
    yearEnd: data.year_end,
    duration: data.duration,
    description: data.description
  }
}
