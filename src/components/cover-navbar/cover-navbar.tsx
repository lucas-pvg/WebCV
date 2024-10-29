import style from './cover-navbar.module.css'

interface CoverNavbarProps {
  className?: string
}

export function CoverNavbar({ className }: CoverNavbarProps) {
  const classes = `${className ? className : ''}`

  return (
    <nav className={classes}>
      <ul className={style.list}>
        <li className={style.link}><a href="#profile">Profile</a></li>
        <li className={style.link}><a href="#education">Experience</a></li>
        <li className={style.link}><a href="#skills">Skills</a></li>
        <li className={style.link}><a href="#experience">Education</a></li>
        <li className={style.link}><a href="#projects">Projects</a></li>
        <li className={style.link}><a href="#contacts">Contact</a></li>
      </ul>
    </nav>
  )
}