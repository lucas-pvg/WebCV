import { EventInterface } from '../../data/event'
import { motion } from 'framer-motion'
import style from './timeline.module.css'

interface TimelineProps {
  className?: string
  size?: number
  data?: EventInterface[]
}

const item = {
  hidden: { opacity: 0, transform: "translate(-32px)" },
  visible: (i: number) => ({
    opacity: 1,
    transform: "translate(0)",
    transition: {
      duration: .5,
      delay: .6 + (i * 0.3),
      ease: 'easeOut'
    },
  }),
}

export function Timeline({ className, size=400, data=[] }: TimelineProps) {
  return (
    <div className={className}>
      {
        data.map((e, index) => { return (
          <div key={index} className={style.event} style={{width: size}}>
            <h6 className={style.year}>{ e.yearEnd }</h6>

            <div className={style.circle} />
            <div className={style.vl} />

            <motion.h6 
              className={style.title}
              custom={index}
              initial='hidden'
              animate='visible'
              variants={item}
            >
              { e.label }
            </motion.h6>

            <motion.p 
              className={style.subtitle}
              custom={index}
              initial='hidden'
              animate='visible'
              variants={item}
            >
              { e.duration 
                ? `${e.institution} | ${e.duration.value} ${e.duration.metric}${e.duration.value > 1 && 's'}`
                : `${e.institution}`
              }
            </motion.p>

            <motion.p
              className={style.description}
              custom={index}
              initial='hidden'
              animate='visible'
              variants={item}
            >
              { e.description }
            </motion.p>
          </div>
        )})
      }
    </div>
  )
}
