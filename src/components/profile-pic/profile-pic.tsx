import ProfileIMG from '../../assets/profile-pic.jpg'
import style from './profile-pic.module.css'

interface ProfilePicProps {
  className?: string
  name: string
  subtitles: string[]
}

export function ProfilePic({ className, name, subtitles }: ProfilePicProps) {
  const classes = className ? `${style.profile} ${className}` : style.profile
  
  return (
    <div className={classes}>
      <img src={ProfileIMG} />

      <div className={style.label}>
        <h3>{ name }</h3>
        
        <div className={style.italic}>
          {
            subtitles.map((sub, index) => { return (
              <p key={index}>{ sub }</p>
            )})
          }
        </div>
      </div>
    </div>
  )
}
