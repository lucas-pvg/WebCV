import { cva, VariantProps } from 'class-variance-authority'
import { Icon } from '../icon/icon'
import style from './sidebar.module.css'

const sidebarVariants = cva(
  style.sidebar,
  {
    variants: {
      inverse: {
        true: style.inverse,
        false: style.base
      },
      bottom: {
        true: style.bottom,
        false: ''
      }
    },
    defaultVariants: {
      inverse: false,
      bottom: false
    }
  }
)

interface SidebarProps extends VariantProps<typeof sidebarVariants> {
  className?: string
  inverse?: boolean
  bottom?: boolean
  zIndex?: number
  linkedin?: string
  github?: string
}

export function Sidebar({ className, inverse, bottom, zIndex=0, linkedin, github }: SidebarProps) {
  const classes = className
    ? `${sidebarVariants({ inverse, bottom })} ${className}`
    : sidebarVariants({ inverse, bottom })

  return (
    <div className={classes} style={{zIndex: zIndex}}>
      <div className={style.vl} />

      <div className={style.icons}>
        <Icon className={style['side-icon']} href={linkedin} size={32} type='linkedin' inverse={inverse} hover />
        <Icon className={style['side-icon']} href={github} size={32} type='github' inverse={inverse} hover />
      </div>

      {
        bottom
        ? (
          <div className={style['bottom-container']}>
            <div className={style.box} />
            <Icon className={style['bottom-icon']} type='down-arrow' size={28} inverse={inverse} hover />
          </div>
        )
        : <div className={style.vl} />
      }
      
    </div>
  )
}
