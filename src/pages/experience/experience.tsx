import { useContext } from 'react'
import { ProfileContext } from '../../context/ProfileContext'
import { Page } from '../page/page'
import { SectionTitle } from '../../components/section-title/section-title'
import { Timeline } from '../../components/timeline/timeline'

import style from './experience.module.css'

interface ExperienceProps {
  zIndex?: number
  visible?: boolean
}

export function Experience({ zIndex=0, visible=false }: ExperienceProps) {  
  const profile = useContext(ProfileContext)
  const defaultClasses = [style.experience, 'page'].join(' ')

  return (
    <div id='experience' style={{zIndex: zIndex}} className={defaultClasses}>
      {
        visible &&
        <Page 
          title='Experience'
          description="Here's a timeline of my working experience up until now along with a summary of what I developed in each one of them."
        >
          <section className={style.content}>
            <SectionTitle title='Career' />
            <Timeline data={profile.experience} size={400}/>
          </section>
        </Page>
      }
    </div>
  )
}
