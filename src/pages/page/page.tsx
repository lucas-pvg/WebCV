import { ComponentProps } from 'react'
import { motion } from 'framer-motion'
import { Header } from '../../components/header/header'

import style from './page.module.css'

interface PageProps extends ComponentProps<'div'> {
  className?: string
  title: string
  description?: string
}

export function Page({ className, title, description, children }: PageProps) {
  const classes = className ? [style.page, className].join(' ') : style.page
  
  return (
    <motion.div 
      className={classes}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <Header
        className={style['page-header']}
        title={title}
        description={description}
        initial={{ opacity: 0, scale: .5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      />

      <motion.main 
        className={style.content}
        initial={{ opacity: 0, transform: "translate(-50%, -52%)" }}
        animate={{ opacity: 1, transform: "translate(-50%, -45%)" }}
        transition={{
          duration: .8,
          delay: 0.3,
          ease: [0.15, 0.8, 0.5, 1]
        }}
      >
        { children }
      </motion.main>
    </motion.div>
  )
}
