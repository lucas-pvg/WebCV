import { useContext } from 'react'
import { ProfileContext } from '../../context/ProfileContext'
import { Page } from '../page/page'
import { SectionTitle } from '../../components/section-title/section-title'
import { Timeline } from '../../components/timeline/timeline'

import style from './education.module.css'

interface EducationProps {
  zIndex?: number
}

export function Education({ zIndex=0 }: EducationProps) {
  const profile = useContext(ProfileContext)
  const defaultClasses = [style.education, 'page'].join(' ')

  return (
    <div id='education' style={{zIndex: zIndex}} className={defaultClasses}>
      <Page 
        title='Education'
        description="Here's a timeline of my educational experience up until now along with the courses I've enrolled and certificationsof I've earned. "
      >
        <div className={style.content}>
          <section className={style.section}>
            <SectionTitle title='Academic' />
            <Timeline size={360} data={profile.education.academic} />
          </section>

          <section className={style.section}>
            <SectionTitle title='Courses' />
            <Timeline size={360} data={profile.education.courses} />
          </section>
        </div>
      </Page>
    </div>
  )
}
