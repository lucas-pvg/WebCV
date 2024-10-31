import { Page } from '../page/page'
import { SkillTable } from '../../components/skill-table/skill-table'

import style from './skills.module.css'

export function Skills() {  
  return (
    <div id='skills' className={[style.skills, 'page'].join(' ')}>
      <Page 
        title='Skills'
        description="Here's a summary of the most import skills I developed with my experience as a front-end developer and web designer."
      >
        <section className={style.content}>
          <SkillTable className={style.tech} label='Technologies' />
          <SkillTable className={style.tools} label='Tools / Softwares' />
          <SkillTable className={style.lang} label='Languages' />
        </section>
      </Page>
    </div>
  )
}
