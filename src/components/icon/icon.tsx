import DownArrow from '../../assets/icons/down-arrow.png'
import DownArrowInverse from '../../assets/icons/down-arrow-inverse.png'
import Github from '../../assets/icons/github.png'
import GithubInverse from '../../assets/icons/github-inverse.png'
import Linkedin from '../../assets/icons/linkedin.png'
import LinkedinInverse from '../../assets/icons/linkedin-inverse.png'
import UpArrow from '../../assets/icons/up-arrow.png'

import { ComponentProps } from 'react'
import style from './icon.module.css'

interface IconProps extends ComponentProps<'img'> {
  className?: string
  type: 'down-arrow' | 'github' | 'linkedin' | 'up-arrow'
  size?: number
  inverse?: boolean
}

export function Icon({ className, type, size=40, inverse=false, ...props }: IconProps) {
  const classes = className ? `${style.icon} ${className}` : style.icon
  
  switch (type) {
    case 'down-arrow': return (
      <img 
        className={classes}
        src={inverse ? DownArrowInverse : DownArrow}
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
  }
}
