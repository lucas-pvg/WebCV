import style from './timeline.module.css'

interface TimelineProps {
  className?: string
}

export function Timeline({ className }: TimelineProps) {  
  return (
    <div className={className}>
      <div className={style.event}>
        <h6 className={style.year}>2024</h6>

        <div className={style.circle} />
        <div className={style.vl} />

        <h6 className={style.title}>UX Design Internship</h6>
        <p className={style.subtitle}>BTG Pactual | 4 months</p>
        <p className={style.description}>Design and revamp of BTG Investments app screens, using Figma, aimed at improving customer experience.</p>
      </div>

      <div className={style.event}>
        <h6 className={style.year}>2024</h6>

        <div className={style.circle} />
        <div className={style.vl} />

        <h6 className={style.title}>UX Design Internship</h6>
        <p className={style.subtitle}>BTG Pactual | 4 months</p>
        <p className={style.description}>Design and revamp of BTG Investments app screens, using Figma, aimed at improving customer experience.</p>
      </div>

      <div className={style.event}>
        <h6 className={style.year}>2024</h6>

        <div className={style.circle} />
        <div className={style.vl} />

        <h6 className={style.title}>UX Design Internship</h6>
        <p className={style.subtitle}>BTG Pactual | 4 months</p>
        <p className={style.description}>Design and revamp of BTG Investments app screens, using Figma, aimed at improving customer experience.</p>
      </div>
    </div>
  )
}
