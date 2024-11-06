import { useNavigate } from '../../hooks/useNavigate'
import { Sidebar } from '../../components/sidebar/sidebar'
import { Scrollbar } from '../../components/scrollbar/scrollbar'

import { Cover } from '../cover/cover'
import { Profile } from '../profile/profile'
import { Experience } from '../experience/experience'
import { Skills } from '../skills/skills'
import { Education } from '../education/education'

import style from './navigation.module.css'

const pages = [
  '#cover',
  '#profile',
  '#experience',
  '#skills',
  '#education'
]

export function Navigation() {
  const { scope, ...navigate } = useNavigate(pages)

  const handleScroll = (e: any) => {
    if (e.deltaY > 0) {
      navigate.nextPage();
    } else if (e.deltaY < 0) {
      navigate.prevPage();
    }
  };
  
  return (
    <div className={style.navigation}>
      <Sidebar zIndex={pages.length} className={style.sidebar} />
      
      <div ref={scope} className='pages' onWheel={handleScroll}>
        <Cover zIndex={pages.length} navigate={navigate.goToPage} />
        <Profile zIndex={pages.length - 1} />
        <Experience zIndex={pages.length - 2} />
        <Skills zIndex={pages.length - 3} />
        <Education zIndex={pages.length - 4} />
      </div>

      <Scrollbar progress={(navigate.currentPage + 1) / pages.length}/>
    </div>
  )
}
