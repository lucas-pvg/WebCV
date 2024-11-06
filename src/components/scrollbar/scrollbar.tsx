import { motion } from 'framer-motion'
import style from './scrollbar.module.css'

interface ScrollbarProps {
  className?: string
  progress?: number
}

export function Scrollbar({ className, progress=0 }: ScrollbarProps) {
  const classes = className ? [className, style.scrollbar].join(' ') : style.scrollbar
  
  return (
    <div className={classes}>
      <motion.div
        className={style.bar}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: progress}}
        transition={{
          duration: .7,
          delay: .2,
          ease: 'easeOut'
        }}
      />
    </div>
  )
}
