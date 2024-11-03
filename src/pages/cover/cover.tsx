import { useContext } from 'react'
import { ProfileContext } from '../../context/ProfileContext'
import { CoverNavbar } from '../../components/cover-navbar/cover-navbar'
import { CoverTitle } from '../../components/cover-title/cover-title'
import { Sidebar } from '../../components/sidebar/sidebar'

import style from './cover.module.css'

interface CoverProps {
  navigate: Function
  zIndex?: number
}

export function Cover({ navigate, zIndex=0 }: CoverProps) {
  const profile = useContext(ProfileContext)
  const defaultClasses = [style.cover, 'page'].join(' ')

  return (
    <div id='cover' style={{zIndex: zIndex}} className={defaultClasses}>
      <CoverNavbar navigate={navigate} className={style['cover-navbar']} />
      <Sidebar className={style['cover-sidebar']} inverse bottom/>

      <CoverTitle
        className={style['cover-title']}
        title={profile.name}
        description={profile.title}
      />
    </div>
  )
}
