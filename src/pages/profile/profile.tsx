import { useContext } from 'react'
import { ProfileContext } from '../../context/ProfileContext'
import { Page } from '../page/page'
import { ProfilePic } from '../../components/profile-pic/profile-pic'
import { SectionTitle } from '../../components/section-title/section-title'

import style from './profile.module.css'

interface ProfileProps {
  zIndex?: number
}

export function Profile({ zIndex=0 }: ProfileProps) {  
  const profile = useContext(ProfileContext)
  const defaultClasses = [style.profile, 'page'].join(' ')

  return (
    <div id='profile' style={{zIndex: zIndex}} className={defaultClasses}>
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
