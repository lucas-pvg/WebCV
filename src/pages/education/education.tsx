import { Page } from '../page/page'
import { SectionTitle } from '../../components/section-title/section-title'
import { Timeline } from '../../components/timeline/timeline'

import style from './education.module.css'

export function Education() {  
  return (
    <div id='education' className={[style.education, 'page'].join(' ')}>
      <Page 
        title='Education'
        description="Here's a timeline of my educational experience up until now along with the courses I've enrolled and certificationsof I've earned. "
      >
        <div className={style.content}>
          <section className={style.section}>
            <SectionTitle title='Education' />
            <Timeline size={350} />
          </section>

          <section className={style.section}>
            <SectionTitle title='Courses' />
            <Timeline size={350} />
          </section>
        </div>
      </Page>
    </div>
  )
}
