import { ComponentProps } from 'react'
import { Skill } from '../skill/skill'
import style from './skill-table.module.css'

interface SkillTableProps extends ComponentProps<'table'> {
  className?: string
  label: string
}

export function SkillTable({ className, label, ...props }: SkillTableProps) {
  const classes = className ? `${style.table} ${className}` : style.table

  return (
    <table className={classes} {...props}>
      <thead>
        <tr className={style.header}>
          <th colSpan={2}><h5>{ label }</h5></th>
        </tr>
      </thead>

      <tbody>
        <Skill label='HTML/5' rating={4} />
        <Skill label='CSS/3' rating={4} />
        <Skill label='TypeScript' rating={3} />
      </tbody>
    </table>
  )
}
