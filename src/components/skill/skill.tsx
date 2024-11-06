import { motion } from 'framer-motion'
import style from './skill.module.css'

interface SkillProps {
  label: string
  rating?: 0 | 1 | 2 | 3 | 4 | 5
  index?: number
}

export function Skill({ label, rating, index=0 }: SkillProps) {
  return (
    <motion.tr 
      className={style.skill}
      initial={{ opacity: 0, transform: "translate(-32px)" }}
      animate={{ opacity: 1, transform: "translate(0)" }}
      transition={{ 
        duration: .5, 
        delay: .3 + (index * 0.1), 
        ease: 'easeOut'
      }}
    >
      <td className={style.label}>
        <p>{ label }</p>
      </td>

      <td>
        <div className={style.rating} >
          { rating &&
            [...Array(5).keys()].map((i) => { return (
              i < rating
              ? <div key={i} className={[style.circle, style.full].join(' ')} />
              : <div key={i} className={style.circle} />
            )})
          }
        </div>
      </td>
    </motion.tr>
  )
}
