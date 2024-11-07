import { ComponentProps } from 'react'
import { Icon } from '../icon/icon'

import style from './back-button.module.css'

interface BackButtonProps extends ComponentProps<'button'> {
  className?: string
  navigate: Function
}

export function BackButton({ className, navigate, ...props }: BackButtonProps) {
  const classes = [style.button, className].join(' ')
  
  return (
    <button onClick={() => navigate()} className={classes} {...props}>
      <Icon type='up-arrow' size={20} inverse />
    </button>
  )
}
