import { ComponentProps, HTMLAttributeAnchorTarget } from 'react'
import { Link, To } from 'react-router'
import style from './button.module.css'

interface ButtonProps extends ComponentProps<'button'> {
  to?: To;
  target?: HTMLAttributeAnchorTarget
  variant?: 'solid' | 'outline' | 'present' | 'absent';
}

export function Button({ to, target, variant, ...props }: ButtonProps) {
  const but = (
    <button
      className={style.button}
      {...props}
    />
  )

  if (to) {
    return <Link to={to} target={target}>{ but }</Link>
  } else return but
}
