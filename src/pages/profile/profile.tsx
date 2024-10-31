import { useContext } from 'react'
import { ProfileContext } from '../../context/ProfileContext'
import { Page } from '../page/page'
import { ProfilePic } from '../../components/profile-pic/profile-pic'
import { SectionTitle } from '../../components/section-title/section-title'

import style from './profile.module.css'

export function Profile() {  
  const profile = useContext(ProfileContext)

  return (
    <div id='profile' className={[style.profile, 'page'].join(' ')}>
      <Page title='Profile' >
        <ProfilePic name={profile.name} subtitles={profile.subtitles} />

        <section className={style.text}>
          <SectionTitle title='About Me' />
          {
            profile.about.map((text, index) => { return (
              <p key={index}>{ text }</p>
            )})
          }
        </section>
      </Page>
    </div>
  )
}
