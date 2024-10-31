import { ComponentProps } from 'react'
import { Skill } from '../skill/skill'
import { SkillInterface } from '../../data/skill'
import style from './skill-table.module.css'

interface SkillTableProps extends ComponentProps<'table'> {
  className?: string
  label: string
  data?: SkillInterface[]
  rating?: boolean
}

export function SkillTable({ className, label, data=[], rating=false, ...props }: SkillTableProps) {
  const classes = className ? `${style.table} ${className}` : style.table

  return (
    <table className={classes} {...props}>
      <thead>
        <tr className={style.header}>
          <th colSpan={2}><h6>{ label }</h6></th>
        </tr>
      </thead>

      <tbody>
        {
          data.map((skill, index) => { return (
            rating
            ? <Skill label={skill.label} rating={skill.rating} key={index} />
            : <Skill label={skill.label} key={index} />
          )})
        }
      </tbody>
    </table>
  )
}
