import ProfileIMG from '../../assets/profile-pic.jpg'
import style from './profile-pic.module.css'

interface ProfilePicProps {
  className?: string
}

export function ProfilePic({ className }: ProfilePicProps) {
  const classes = className ? `${style.profile} ${className}` : style.profile
  
  return (
    <div className={classes}>
      <img src={ProfileIMG} />

      <div className={style.label}>
        <h3>Lucas Pavan Garieri</h3>
        
        <div className={style.italic}>
          <p>Junior front-end developer and web designer</p>
          <p>Graduated in Computer Engineering from USP</p>
        </div>
      </div>
    </div>
  )
}
