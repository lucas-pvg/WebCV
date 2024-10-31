import { ProfileInterface } from "../data/profile"
import { SkillInterface, skillMapper } from "../data/skill"
import { EventInterface, eventMapper } from "../data/event"
import CV from '../data/CV.json'

export const useProfileData = (): ProfileInterface => {
  const experience: EventInterface[] = CV.experience.map(exp => eventMapper(exp))
  const skills: SkillInterface[] = CV.skills.map(skill => skillMapper(skill))
  const education: ProfileInterface['education'] = {
    academic: CV.education.academic.map(edu => eventMapper(edu)),
    courses: CV.education.courses.map(edu => eventMapper(edu))
  }

  return {
    name: CV.name,
    title: CV.title,
    subtitles: CV.subtitles,
    contact: CV.contact,
    about: CV.about,
    experience: experience,
    skills: skills,
    education: education
  }
}
