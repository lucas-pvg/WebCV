import style from './cover-navbar.module.css'

interface CoverNavbarProps {
  className?: string
  navigate: Function
  download?: boolean
}

export function CoverNavbar({ className, navigate, download=false }: CoverNavbarProps) {
  const classes = `${className ? className : ''}`

  return (
    <nav className={classes}>
      <ul className={style.list}>
        <li onClick={() => navigate('#profile')} className={style.link}>Profile</li>
        <li onClick={() => navigate('#experience')} className={style.link}>Experience</li>
        <li onClick={() => navigate('#skills')} className={style.link}>Skills</li>
        <li onClick={() => navigate('#education')} className={style.link}>Education</li>
        <li className={style.link}>Projects</li>
        <li onClick={() => navigate('#contact')} className={style.link}>Contact</li>
        
        {
          download && 
          <a className={style.download} href='/cv-en.pdf' download>
            <li className={style.link}>Download CV</li>
          </a>
        }
      </ul>
    </nav>
  )
}
