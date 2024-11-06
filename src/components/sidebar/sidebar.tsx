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
}

export function Sidebar({ className, inverse, bottom, zIndex=0 }: SidebarProps) {
  const classes = className
    ? `${sidebarVariants({ inverse, bottom })} ${className}`
    : sidebarVariants({ inverse, bottom })

  return (
    <div className={classes} style={{zIndex: zIndex}}>
      <div className={style.vl} />

      <div className={style.icons}>
        <Icon className={style['side-icon']} size={32} type='linkedin' inverse={inverse} />
        <Icon className={style['side-icon']} size={32} type='github' inverse={inverse} />
      </div>

      {
        bottom
        ? (
          <div className={style['bottom-container']}>
            <div className={style.box} />
            <Icon className={style['bottom-icon']} type='down-arrow' size={28} inverse={inverse} />
          </div>
        )
        : <div className={style.vl} />
      }
      
    </div>
  )
}
