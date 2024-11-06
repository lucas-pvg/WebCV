import { motion } from 'framer-motion'
import style from './header.module.css'

interface HeaderProps {
  className?: string
  title: string
  description?: string
}

export function Header({ className, title, description }: HeaderProps) {
  const classes = className ? `${style.header} ${className}` : style.header
  
  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <div className={style.title} >
        <h2>{ title }</h2>
        <hr className={style.hl} />
      </div>

      { 
        description &&
        <p className={style.description} >{ description }</p> 
      }
    </motion.div>
  )
}
