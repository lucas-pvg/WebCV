import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FaLinkedin, FaReact, FaGithub } from "react-icons/fa";
import { TbBrandReactNative, TbBrandDjango } from "react-icons/tb";
import { SiRedux, SiPostgresql } from "react-icons/si";
import { IoIosMenu } from "react-icons/io";
import { SectionTitle } from '../../components/section-title/section-title'
import { Button } from "../../components/button/button";

import LevyIMG from '../../assets/Levy.jpg'
import LuquinhasIMG from '../../assets/Lquinhas.jpg'
import PedrinhoIMG from '../../assets/Pedrinho.jpeg'
import VictorIMG from '../../assets/Victor.jpeg'
import HomeWebIMG from '../../assets/Home.png'
import HomeMobileIMG from '../../assets/Home-mobile.png'
import AttMobileIMG from '../../assets/attendance.png'
import CronogramaIMG from '../../assets/cronograma teste.png'
import ArchitectureIMG from '../../assets/Diagrama Arquitetural.png'

import style from './tcc.module.css'

export function TCC() {
  const [ navbar, setNavbar ] = useState(false)
  const resNavRef = useRef<HTMLUListElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (resNavRef.current && !resNavRef.current.contains(event.target as Node)) {
        setNavbar(false)
      }
    }

    const handleScroll = () => {
      setNavbar(false)
    }

    if (navbar) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("scroll", handleScroll)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("scroll", handleScroll)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("scroll", handleScroll)
    }
  }, [navbar])

  return (
    <div className={style.tcc}>
      <header className={style.header}>
        <h5 className={style['header-title']}>Projeto de Formatura - USP</h5>

        <nav className={style.navbar}>
          <ul className={style.navlist}>
            <li className={style.navlink}><a href='#project'>Projeto</a></li>
            <li className={style.navlink}><a href='#about-us'>Quem somos?</a></li>
            <li className={style.navlink}><a href='#objectives'>Motivação</a></li>
            <li className={style.navlink}><a href='#development'>Desenvolvimento</a></li>
            <li className={style.navlink}><a href='#results'>Resultados</a></li>
            <li className={style.navlink}><a href='https://beacons.ai/tcc_cp' target='_blank'>Documentação</a></li>
          </ul>
        </nav>

        <nav ref={resNavRef} className={style.resnavbar}>
          <IoIosMenu size={32} onClick={() => {
            setNavbar(prev => !prev)
            console.log('Clicked')
            console.log(navbar)
          }} />
          
          <AnimatePresence>
            {
              navbar &&
              <motion.ul 
                className={style.resnavlist}
                onClick={() => setNavbar(false)}
                initial={{ opacity: 0, transform: "translateY(-20%)" }}
                animate={{ opacity: 1, transform: "translateY(0)" }}
                exit={{ opacity: 0, transform: "translateY(-20%)" }}
                transition={{
                  duration: .5,
                  ease: [0.15, 0.8, 0.5, 1]
                }}
              >
                <li className={style.resnavlink}><a href='#project'>Projeto</a></li>
                <li className={style.resnavlink}><a href='#about-us'>Quem somos?</a></li>
                <li className={style.resnavlink}><a href='#objectives'>Motivação</a></li>
                <li className={style.resnavlink}><a href='#development'>Desenvolvimento</a></li>
                <li className={style.resnavlink}><a href='#results'>Resultados</a></li>
                <li className={style.resnavlink}><a href='https://beacons.ai/tcc_cp' target='_blank'>Documentação</a></li>
              </motion.ul>
            }
          </AnimatePresence>
          
        </nav>
      </header>

      <div className={style.hero}>
        <div className={style.title}>
          <h1>Desenvolvimento de uma Solução para Monitoramento de Presença e Engajamento para o Cursinho Popular da Escola Politécnica da Universidade de São Paulo</h1>
        </div>

        <Button to='https://beacons.ai/tcc_cp' target='_blank'>Links do Projeto</Button>
      </div>

      <main className={style.content}>
        <section id='project' className={[style.section, style.whatis].join(' ')}>
          <SectionTitle title='Projeto' />

          <p>O projeto Desenvolvimento de uma solução para monitoramento de presença e engajamento para o Cursinho Popular da Escola Politécnica da Universidade de São Paulo é o trabalho de conclusão de curso dos alunos Lucas Pavan Garieri, Pedro Henrique Rodrigues de Viveiros e Victor de Almeida Santana e orientado pelo professor Dr. Fábio Levy Siqueira.</p>
          <p>O trabalho é composto por duas plataformas: uma web e um aplicativo móvel. O sistema web é voltado aos professores e demais pessoas que fazem parte da gestão do cursinho, na qual é possível gerenciar as aulas, as presenças de seus alunos e monitorar as métricas decorrentes das presenças. Já o aplicativo é voltado aos alunos do cursinho para que possam acompanhar sua grade horária e, principalmente, marcar sua própria presença no sistema.</p>
          
          <div className={style['home-img']}>
            <img className={style['web-img']} src={HomeWebIMG} />

            <div className={style['row-img']}>
              <img className={style['mob-img']} src={HomeMobileIMG} />
              <img className={[style['mob-img'], style['res-img']].join(' ')} src={AttMobileIMG} />
            </div>
          </div>
        </section>

        <section id='about-us' className={[style.section, style.aboutus].join(' ')}>
          <SectionTitle title='Quem somos nós?' />

          <div className={style.subsection}>
            <h5>Orientador</h5>

            <div className={[style.profile, style.horizontal].join(' ')}>
              <img src={LevyIMG} />

              <div className={style['profile-info']}>
                <h6 className={style['profile-name']}>Prof. Dr. Fábio Levy Siqueira</h6>
                <div className={style['profile-links']}>
                  <a href='https://www.linkedin.com/in/levysiqueira/' target="_blank">
                    <FaLinkedin size={24} /> 
                  </a>
                  <a href='https://github.com/levysiqueira' target="_blank">
                    <FaGithub size={24} /> 
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={style.subsection}>
            <h5>Integrantes do Grupo</h5>

            <div className={style.group}>
              <div className={[style.profile, style.vertical].join(' ')}>
                <img src={LuquinhasIMG} />

                <div className={style['profile-info']}>
                  <h6 className={style['profile-name']}>Lucas Pavan Garieri</h6>
                  <div className={style['profile-links']}>
                    <a href='https://www.linkedin.com/in/lucas-pvg/' target="_blank">
                      <FaLinkedin size={24} /> 
                    </a>
                    <a href='https://github.com/lucas-pvg' target="_blank">
                      <FaGithub size={24} /> 
                    </a>
                  </div>
                </div>
              </div>

              <div className={[style.profile, style.vertical].join(' ')}>
                <img src={PedrinhoIMG} />

                <div className={style['profile-info']}>
                  <h6 className={style['profile-name']}>Pedro Henrique Rodrigues de Viveiros</h6>
                  <div className={style['profile-links']}>
                    <a href='https://www.linkedin.com/in/pedrohrviveiros/' target="_blank">
                      <FaLinkedin size={24} /> 
                    </a>
                    <a href='https://github.com/pedrohrodrig' target="_blank">
                      <FaGithub size={24} /> 
                    </a>
                  </div>
                </div>
              </div>
      
              <div className={[style.profile, style.vertical].join(' ')}>
                <img src={VictorIMG} />

                <div className={style['profile-info']}>
                  <h6 className={style['profile-name']}>Victor de Almeida Santana</h6>
                  <div className={style['profile-links']}>
                    <a href='https://www.linkedin.com/in/victor-santana-50aa1b208/' target="_blank">
                      <FaLinkedin size={24} /> 
                    </a>
                    <a href='https://github.com/VictorASantana' target="_blank">
                      <FaGithub size={24} /> 
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>   
        </section>

        <section id='objectives' className={[style.section, style.objectives].join(' ')}>
          <SectionTitle title='Motivação' />

          <p>O projeto Desenvolvimento de uma solução para monitoramento de presença e engajamento para o Cursinho Popular da Escola Politécnica da Universidade de São Paulo é o trabalho de conclusão de curso dos alunos Lucas Pavan Garieri, Pedro Henrique Rodrigues de Viveiros e Victor de Almeida Santana. Orientados pelo professor Dr. Fábio Levy Siqueira, visou-se combater uma das grandes dificuldades enfrentadas pela administração do cursinho: a evasão de alunos.</p>
          <p>No decorrer do curso, é notável que muitos alunos acabam despriorizando os estudos, porém, em razão do método de monitoramento de presença atual (listas de presença), os voluntários não têm visibilidade dessa evasão até que seja tarde demais para qualquer atuação. Isso ocorre porque o trabalho de compilar a lista de presença em planilhas do Google é muito custoso em termos de tempo, de modo que essa tarefa é deixada em segundo plano pelos voluntários. Assim, as métricas de presença dos alunos acabam ficando desatualizadas e os voluntários perdem a noção de quando a evasão começa a se tornar um problema a ser enfrentado, por exemplo, com conversas particulares com os alunos para entender melhor o motivo das ausências.</p>
          <p>Além disso, por ser uma organização de cunho popular, as vagas destinadas aos cursos são limitadas, de modo que a evasão prejudique não só a organização, mas também aqueles alunos não contemplados. Assim, caso fosse identificada com maior antecedência, seria possível rearranjar as vagas para contemplar pessoas com maior disponibilidade para frequentar as aulas.</p>
          <p>Com isso em mente, foi desenvolvida uma plataforma para que os próprios alunos pudessem registrar as próprias presenças via aplicativo, enquanto que os professores teriam um painel administrativo para visualizar métricas e gerenciar suas próprias aulas. Desse modo, os professores poderão acompanhar em tempo real a presença de cada um dos alunos nas respectivas aulas, auxiliando o corpo docente a lidar com possíveis evasões durante o curso e, enfim, possibilitar o maior número de estudantes a frequentar escolas com ensino superior de qualidade.</p>
        </section>

        <section id='development' className={[style.section, style.development].join(' ')}>
          <SectionTitle title='Desenvolvimento' />

          <div className={style.subsection}>
            <ul className={style.technologies}>
              <li className={style.tech}><TbBrandDjango size={24} /> Django</li>
              <li className={style.tech}><FaReact size={24} /> React</li>
              <li className={style.tech}><TbBrandReactNative size={24} /> React Native</li>
              <li className={style.tech}><SiRedux size={24} /> Redux</li>
              <li className={style.tech}><SiPostgresql size={24} /> PostgresSQL</li>
            </ul>
          </div>

          <div className={style.subsection}>
            <h5>Arquitetura</h5>

            <div className={style.architecture}>
              <img className={style['arch-img']} src={ArchitectureIMG} />
              <p>O desenvolvimento do projeto foi feito seguindo as arquiteturas MVT, naturalmente implementada pelo Django, clean architecture e flux architecture, implementada a partir da biblioteca Redux. A clean architecture está presente, principalmente, no mobile, garantindo o isolamento das camadas e a padronização de entidades e casos de uso, tornando o código modular e escalável. Já o Redux está presente na plataforma web, de forma a gerenciar melhor os estados e sua lógica de atualização dada a maior complexidade dessa aplicação. Além disso, o sistema web também implementa alguns conceitos de clean architecture para a padronização de de entidades e casos de uso ao longo de todo o sistema.</p>
            </div>
          </div>
        </section>

        <section id='results' className={[style.section, style.results].join(' ')}>
          <SectionTitle title='Resultados' />

          <p>Para validação do sistema com o Cursinho Popular da Poli USP (CP), foi feito um cronograma de testes que abarca três diferentes testes: Usabilidade, Prático Controlado e Pesquisa e Feedback.</p>
          <img className={style['schedule-img']} src={CronogramaIMG} />

          <div className={style.subsection}>
            <h5>Teste de Usabilidade</h5>
            <p>Foram feitas entrevistas com seis usuários do sistema, três alunos e três membros do CP, nas quais os entrevistados foram pedidos a seguir determinados fluxos como “Agendar uma aula para Terça-feira às 19h” ou “Marque sua presença na aula de hoje”. Essa abordagem visa validar a jornada do usuário com o uso do aplicativo, bem como ter um feedback mais imediato e intimista que poderia gerar melhorias para a versão do teste prático controlado.</p>
          </div>
          
          <div className={style.subsection}>
            <h5>Teste Prático Controlado</h5>
            <p>Foram selecionados alguns professores e alunos do CP para participarem de um teste de simulação do comportamento real. Ou seja, foi feito um vídeo explicativo em como utilizar ambas as plataformas e, uma vez disponibilizado isso aos usuários, deixou-os livres para explorar o sistema. Essa abordagem visa, justamente, simular um cenário real para recolher feedbacks mais gerais do uso da aplicação.</p>
          </div>

          <div className={style.subsection}>
            <h5>Pesquisa e Feedback</h5>
            <p>Após o Teste Prático, passou-se um formulário para recolher opiniões e sugestões a respeito de ambas as plataformas. Essa etapa visa recolher de maneira mais estruturada e documentada sugestões e possíveis novas features a serem implementadas previamente ao lançamento das plataformas</p>
          </div>
        </section>
      </main>
    </div>
  )
}
