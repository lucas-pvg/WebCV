import style from './header.module.css'

interface HeaderProps {
  className?: string
  title: string
  description?: string
}

export function Header({ className, title, description }: HeaderProps) {
  const classes = className ? `${style.header} ${className}` : style.header
  
  return (
    <div className={classes}>
      <div className={style.title} >
        <h2>{ title }</h2>
        <hr className={style.hl} />
      </div>

      { 
        description &&
        <p className={style.description} >{ description }</p> 
      }
    </div>
  )
}
