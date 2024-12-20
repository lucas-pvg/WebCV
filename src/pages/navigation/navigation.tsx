import { useContext } from 'react'
import { ProfileContext } from '../../context/ProfileContext'
import { useNavigate } from '../../hooks/useNavigate'
import { Sidebar } from '../../components/sidebar/sidebar'
import { Scrollbar } from '../../components/scrollbar/scrollbar'
import { BackButton } from '../../components/back-button/back-button'

import { Cover } from '../cover/cover'
import { Profile } from '../profile/profile'
import { Experience } from '../experience/experience'
import { Skills } from '../skills/skills'
import { Education } from '../education/education'
import { Contact } from '../contact/contact'

import style from './navigation.module.css'

const pages = [
  '#cover',
  '#profile',
  '#experience',
  '#skills',
  '#education',
  '#contact'
]

export function Navigation() {
  const profile = useContext(ProfileContext)
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
        <Contact zIndex={pages.length - 5} visible={navigate.currentPage === 5 && navigate.animationEnded} />
      </div>

      <BackButton style={{zIndex: pages.length - 1}} navigate={() => navigate.goToPage('#cover')} />
      <Scrollbar progress={(navigate.currentPage + 1) / pages.length}/>
    </div>
  )
}
