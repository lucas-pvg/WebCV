import { motion, MotionProps } from 'framer-motion'
import style from './header.module.css'

interface HeaderProps extends MotionProps {
  className?: string
  title: string
  description?: string
}

export function Header({ className, title, description, ...props }: HeaderProps) {
  const classes = className ? `${style.header} ${className}` : style.header
  
  return (
    <motion.div className={classes} {...props}>
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
