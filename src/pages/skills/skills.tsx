import { useContext } from 'react'
import { ProfileContext } from '../../context/ProfileContext'
import { Page } from '../page/page'
import { SkillTable } from '../../components/skill-table/skill-table'

import style from './skills.module.css'

export function Skills() { 
  const profile = useContext(ProfileContext)

  return (
    <div id='skills' className={[style.skills, 'page'].join(' ')}>
      <Page 
        title='Skills'
        description="Here's a summary of the most import skills I developed with my experience as a front-end developer and web designer."
      >
        <section className={style.content}>
          <SkillTable 
            className={style.tech}
            label='Technologies'
            data={profile.skills.filter(sk => sk.category == 'technology')}
            rating
          />

          <SkillTable 
            className={style.tools}
            label='Tools / Softwares'
            data={profile.skills.filter(sk => sk.category == 'tool')}
            rating
          />

          <SkillTable
            className={style.lang}
            label='Languages'
            data={profile.skills.filter(sk => sk.category == 'language')} 
          />
        </section>
      </Page>
    </div>
  )
}
