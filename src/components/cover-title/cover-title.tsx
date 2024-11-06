import { motion } from 'framer-motion'
import style from './cover-title.module.css'

interface CoverTitleProps {
  title: string
  description?: string
  className?: string
}

export function CoverTitle({ title, description, className }: CoverTitleProps) {
  const classes = className ? `${style.container} ${className}` : style.container

  return (
    <motion.div 
      className={classes}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{
        duration: 1,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <h1 className={style.title}>{ title }</h1>
      <hr className={style.divider} />

      {
        description &&
        <p className={style.description}>{ description }</p>
      }
    </motion.div>
  )
}
