import style from './cover-navbar.module.css'

interface CoverNavbarProps {
  className?: string
  navigate: Function
}

export function CoverNavbar({ className, navigate }: CoverNavbarProps) {
  const classes = `${className ? className : ''}`

  return (
    <nav className={classes}>
      <ul className={style.list}>
        <li onClick={() => navigate('#profile')} className={style.link}>Profile</li>
        <li onClick={() => navigate('#experience')} className={style.link}>Experience</li>
        <li onClick={() => navigate('#skills')} className={style.link}>Skills</li>
        <li onClick={() => navigate('#education')} className={style.link}>Education</li>
        <li className={style.link}>Projects</li>
        <li className={style.link}>Contact</li>
      </ul>
    </nav>
  )
}
