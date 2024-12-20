import { useContext } from 'react'
import { AnimatePresence } from 'framer-motion'
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
      <AnimatePresence>
      {
        visible &&
        <Page 
          title='Experience'
          description="Here's a timeline of my working experience up until now along."
        >
          <section className={style.content}>
            <SectionTitle title='Career' />
            <Timeline data={profile.experience} size={400}/>
          </section>
        </Page>
      }
      </AnimatePresence>
    </div>
  )
}
