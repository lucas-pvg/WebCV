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
    if (e.deltaY > 5) {
      navigate.nextPage();
    } else if (e.deltaY < -5) {
      navigate.prevPage();
    }
  };
  
  return (
    <div className={style.navigation}>
      <Sidebar 
        linkedin={profile.contact.find((c) => c.label === 'linkedin')?.value}
        github={profile.contact.find((c) => c.label === 'github')?.value}
        zIndex={pages.length} 
        className={style.sidebar}
      />
      
      <div ref={scope} className='pages' onWheel={handleScroll}>
        <Cover zIndex={pages.length} visible={navigate.currentPage === 0 && navigate.animationEnded} navigate={navigate.goToPage} />
        <Profile zIndex={pages.length - 1} visible={navigate.currentPage === 1 && navigate.animationEnded} />
        <Experience zIndex={pages.length - 2} visible={navigate.currentPage === 2 && navigate.animationEnded} />
        <Skills zIndex={pages.length - 3} visible={navigate.currentPage === 3 && navigate.animationEnded} />
        <Education zIndex={pages.length - 4} visible={navigate.currentPage === 4 && navigate.animationEnded} />
      </div>

      <Scrollbar progress={(navigate.currentPage + 1) / pages.length}/>
    </div>
  )
}
