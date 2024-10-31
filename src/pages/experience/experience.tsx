import { useContext } from 'react'
import { ProfileContext } from '../../context/ProfileContext'
import { Page } from '../page/page'
import { SectionTitle } from '../../components/section-title/section-title'
import { Timeline } from '../../components/timeline/timeline'

import style from './experience.module.css'

export function Experience() {  
  const profile = useContext(ProfileContext)

  return (
    <div id='experience' className={[style.experience, 'page'].join(' ')}>
      <Page 
        title='Experience'
        description="Here's a timeline of my working experience up until now along with a summary of what I developed in each one of them."
      >
        <section className={style.content}>
          <SectionTitle title='Career' />
          <Timeline data={profile.experience} size={400}/>
        </section>
      </Page>
    </div>
  )
}
