import { Event } from '../../data/event'
import style from './timeline.module.css'

interface TimelineProps {
  className?: string
  size?: number
  data?: Event[]
}

export function Timeline({ className, size=400, data=[] }: TimelineProps) {  
  return (
    <div className={className}>
      {
        data.map((e, index) => { return (
          <div key={index} className={style.event} style={{width: size}}>
            <h6 className={style.year}>{ e.yearStart }</h6>

            <div className={style.circle} />
            <div className={style.vl} />

            <h6 className={style.title}>{ e.label }</h6>
            <p className={style.subtitle}>
              { e.duration 
                ? `${e.institution} | ${e.duration.value} ${e.duration.metric}${e.duration.value > 1 && 's'}`
                : `${e.institution}`
              }
            </p>
            <p className={style.description}>{ e.description }</p>
          </div>
        )})
      }
    </div>
  )
}
