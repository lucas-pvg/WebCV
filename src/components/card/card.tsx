import { useState } from 'react'
import { motion } from 'framer-motion'
import { ProfilePic } from '../profile-pic/profile-pic'
import { Icon, IconProps } from '../icon/icon'
import { Contact } from '../../data/profile'

import style from './card.module.css'

interface CardProps {
  className?: string
  name: string
  subtitles: string[]
  contacts?: Contact[]
}

const card = {
  front: {
    rotateY: 0
  },
  back: {
    rotateY: 180
  },
  hover: {
    scale: 1.1,
    cursor: 'pointer',
    transition: { duration: 0.2, ease: 'easeOut' }
  },
  base: {
    scale: 1,
    transition: { duration: 0.2, ease: 'easeOut' }
  },
}

export function Card({ className, name, subtitles, contacts }: CardProps) {
  const classes = [style.card, className && className].join(' ')
  const [ isAnimationEnded, setIsAnimationEnded ] = useState(true)
  const [ isFlipped, setIsFlipped ] = useState(false)

  const handleFlip = () => {
    if (isAnimationEnded) {
      setIsAnimationEnded(false)
      setIsFlipped((prev) => !prev)
    }
  }
  
  return (
    <motion.div
      className={classes}
      initial={[ 'base', 'front']}
      animate={[ 'base', isFlipped ? 'back' : 'front']}
      transition={{ duration: .8, ease:'backOut' }}
      whileHover='hover'
      variants={card}
      onClick={() => handleFlip()}
      onAnimationComplete={() => setIsAnimationEnded(true)}
    >
      <div className={style.front}>
        <ProfilePic name={name} subtitles={subtitles} />
      </div>

      <div className={style.back}>
        <ProfilePic />
        <div className={style.icons}>
          {
            contacts &&
            contacts.map((contact, i) => (
              <a className={style.contact} href={contact.link ? contact.value : undefined} target='_blank' key={i}>
                <Icon type={contact.label as IconProps['type']} size={28} />
                <h6>{ contact.value }</h6>
              </a>
            ))
          }
        </div>
      </div>
    </motion.div>
  )
}
