import style from './cover-title.module.css'

interface CoverTitleProps {
  title: string
  description?: string
  className?: string
}

export function CoverTitle({ title, description, className }: CoverTitleProps) {
  const classes = className ? `${style.container} ${className}` : style.container

  return (
    <div className={classes}>
      <h1>{ title }</h1>
      <hr className={style.divider} />

      {
        description &&
        <p className={style.description}>{ description }</p>
      }
    </div>
  )
}
