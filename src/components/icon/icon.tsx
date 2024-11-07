import DownArrow from '../../assets/icons/down-arrow.png'
import DownArrowInverse from '../../assets/icons/down-arrow-inverse.png'
import Email from '../../assets/icons/email-black.png'
import Github from '../../assets/icons/github-black.png'
import GithubInverse from '../../assets/icons/github-inverse.png'
import Linkedin from '../../assets/icons/linkedin-black.png'
import LinkedinInverse from '../../assets/icons/linkedin-inverse.png'
import UpArrow from '../../assets/icons/up-arrow.png'
import Whatsapp from '../../assets/icons/whatsapp-black.png'

import { ComponentProps } from 'react'
import style from './icon.module.css'

export interface IconProps extends ComponentProps<'img'> {
  className?: string
  type: 'down-arrow' | 'email' | 'github' | 'linkedin' | 'up-arrow' | 'whatsapp'
  size?: number
  inverse?: boolean
  hover?: boolean
}

export function Icon({ className, type, size=40, inverse=false, hover=false, ...props }: IconProps) {
  const classes = [style.icon, hover && style.hover, className].join(' ')
  
  switch (type) {
    case 'down-arrow': return (
      <img 
        className={classes}
        src={inverse ? DownArrowInverse : DownArrow}
        style={{ width: size, height: size }}
        {...props}
      />
    )

    case 'email': return (
      <img
        className={classes}
        src={Email}
        style={{ width: size, height: size }}
        {...props}
      />
    )

    case 'github': return (
      <img
        className={classes}
        src={inverse ? GithubInverse : Github}
        style={{ width: size, height: size }}
        {...props}
      />
    )

    case 'linkedin': return (
      <img
        className={classes}
        src={inverse ? LinkedinInverse : Linkedin}
        style={{ width: size, height: size }}
        {...props}
      />
    )

    case 'up-arrow': return (
      <img
        className={classes}
        src={UpArrow}
        style={{ width: size, height: size }}
        {...props}
      />
    )

    case 'whatsapp': return (
      <img
        className={classes}
        src={Whatsapp}
        style={{ width: size, height: size }}
        {...props}
      />
    )
  }
}
