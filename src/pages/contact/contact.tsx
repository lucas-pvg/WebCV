import { AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import { ProfileContext } from '../../context/ProfileContext'
import { Page } from '../page/page'
import { Card } from '../../components/card/card'

import style from './contact.module.css'

interface ContactProps {
  zIndex?: number
  visible?: boolean
}

export function Contact({ zIndex=0, visible=false }: ContactProps) {  
  const profile = useContext(ProfileContext)
  const defaultClasses = [style.contact, 'page'].join(' ')

  return (
    <div id='contact' style={{zIndex: zIndex}} className={defaultClasses}>
      <AnimatePresence>
      {
        visible &&
        <Page title='Contact' >
          <section className={style.text}>
            <Card name={profile.name} subtitles={profile.subtitles} contacts={profile.contact} />
          </section>
        </Page>
      }
      </AnimatePresence>
    </div>
  )
}
