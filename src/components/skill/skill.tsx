import { ComponentProps } from 'react'
import style from './skill.module.css'

interface SkillProps extends ComponentProps<'tr'> {
  className?: string
  label: string
  rating?: 0 | 1 | 2 | 3 | 4 | 5
}

export function Skill({ className, label, rating, ...props }: SkillProps) {
  return (
    <tr className={style.skill} {...props}>
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
    </tr>
  )
}
