import { useContext } from 'react'
import { ProfileContext } from '../../context/ProfileContext'
import { CoverNavbar } from '../../components/cover-navbar/cover-navbar'
import { CoverTitle } from '../../components/cover-title/cover-title'
import { Sidebar } from '../../components/sidebar/sidebar'

import style from './cover.module.css'

export function Cover() {
  const profile = useContext(ProfileContext)

  return (
    <div id='cover' className={style.cover}>
      <CoverNavbar className={style['cover-navbar']} />

      <Sidebar className={style['cover-sidebar']} inverse bottom/>

      <CoverTitle
        className={style['cover-title']}
        title={profile.name}
        description={profile.title}
      />
    </div>
  )
}
