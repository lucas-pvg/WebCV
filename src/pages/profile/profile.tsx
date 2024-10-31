import { Page } from '../page/page'
import { ProfilePic } from '../../components/profile-pic/profile-pic'
import { SectionTitle } from '../../components/section-title/section-title'

import style from './profile.module.css'

export function Profile() {  
  return (
    <div id='profile' className={[style.profile, 'page'].join(' ')}>
      <Page title='Profile' >
        <ProfilePic />

        <section className={style.text}>
          <SectionTitle title='About Me' />
          <p>Tenho 21 anos e sou apaixonado por programação, desenvolvimento front-end e UX/UI design. Atualmente curso engenharia da computação na Escola Politécnica da USP enquanto procuro complementar minha formação, de maneira mais focada em minhas áreas de interesse, com projetos, cursos e outras oportunidades.</p>
          <p>Também sou apaixonado por música e participei de uma orquestra, nos meus ensinos fundamental e médio, durante 7 anos. A música faz parte da minha rotina, de modo que, quando não estou tocando ou aprendendo algum instrumento, estou ouvindo ou pesquisando sobre. Atualmente, toco saxofone tenor, um pouco de flauta transversal e estou tentando aprender teclado.</p>
        </section>
      </Page>
    </div>
  )
}
