import { SkillInterface } from "./skill";
import { EventInterface } from "./event";

export interface Contact {
  label: string
  value: string
  link: boolean
}

export interface ProfileInterface {
  name: string
  title: string
  subtitles: string[]
  contact: Contact[]
  about: string[]
  experience: EventInterface[]
  skills: SkillInterface[]
  education: {
    academic: EventInterface[]
    courses: EventInterface[]
  }
}
