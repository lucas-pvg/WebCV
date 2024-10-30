import style from './section-title.module.css'

interface SectionTitleProps {
  className?: string
  title: string
}

export function SectionTitle({ className, title }: SectionTitleProps) {
  const classes = className ? `${style.title} ${className}` : style.title
  
  return (
    <div className={classes} >
      <hr className={style.left}/>
      <h4>{ title }</h4>
      <hr className={style.right} />
    </div>
  )
}
