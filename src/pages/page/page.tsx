import { ComponentProps } from 'react'
import { Header } from '../../components/header/header'
import style from './page.module.css'

interface PageProps extends ComponentProps<'div'> {
  className?: string
  title: string
  description?: string
}

export function Page({ className, title, description, children, ...props }: PageProps) {
  const classes = className ? [style.page, className].join(' ') : style.page
  
  return (
    <div className={classes} {...props}>
      <Header
        className={style['page-header']}
        title={title}
        description={description}
      />

      <main className={style.content}>
        { children }
      </main>
    </div>
  )
}
