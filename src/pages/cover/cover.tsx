import { CoverNavbar } from '../../components/cover-navbar/cover-navbar'
import { CoverTitle } from '../../components/cover-title/cover-title'
import { Sidebar } from '../../components/cover-sidebar/cover-sidebar'
import style from './cover.module.css'

export function Cover() {
  return (
    <div id='cover' className={style.cover}>
      <CoverNavbar className={style['cover-navbar']} />

      <Sidebar className={style['cover-sidebar']} inverse bottom/>

      <CoverTitle 
        title='Lucas Pavan Garieri'
        description='A React Front-End Developer and Web Designer'
        className={style['cover-title']}
      />
    </div>
  )
}
