import { useContext } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ProfileContext } from '../../context/ProfileContext'
import { CoverNavbar } from '../../components/cover-navbar/cover-navbar'
import { CoverTitle } from '../../components/cover-title/cover-title'
import { Sidebar } from '../../components/sidebar/sidebar'

import style from './cover.module.css'

interface CoverProps {
  navigate: Function
  zIndex?: number
  visible?: boolean
}

export function Cover({ navigate, zIndex=0, visible=false }: CoverProps) {
  const profile = useContext(ProfileContext)
  const defaultClasses = [style.cover, 'page'].join(' ')

  return (
    <div id='cover' style={{zIndex: zIndex}} className={defaultClasses}>
      <CoverNavbar navigate={navigate} className={style['cover-navbar']} />
      <Sidebar className={style['cover-sidebar']} inverse bottom/>

      <AnimatePresence>
        {
          visible &&
          <CoverTitle
            className={style['cover-title']}
            title={profile.name}
            description={profile.title}
          />
        }
      </AnimatePresence>
    </div>
  )
}
