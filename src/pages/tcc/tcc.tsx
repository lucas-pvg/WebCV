import React, { useState, useEffect, useRef } from "react";
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
import ArchitectureIMG from '../../assets/Diagrama Arquitetural.png'
import AttendanceWebIMG from '../../assets/tcc/Consultar Aula.png'
import MetricsWebIMG from '../../assets/tcc/Metricas Alunos.png'

import style from './tcc.module.css'

interface TCCProps {
  appRef: React.RefObject<HTMLDivElement>
}

export function TCC({ appRef }: TCCProps) {
  const [ navbar, setNavbar ] = useState(false)
  const [ navAnimation, setNavAnimation ] = useState(false)
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

    if (navbar && !navAnimation) {
      document.addEventListener("mousedown", handleClickOutside)
      appRef.current?.addEventListener("scroll", handleScroll)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
      appRef.current?.removeEventListener("scroll", handleScroll)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      appRef.current?.removeEventListener("scroll", handleScroll)
    }
  }, [navbar, !navAnimation])

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
            <li className={style.navlink}><a href='https://beacons.ai/tcc_cp'>Documentação</a></li>
          </ul>
        </nav>

        <nav ref={resNavRef} className={style.resnavbar}>
          <IoIosMenu size={32} onClick={() => {if (!navAnimation) setNavbar(prev => !prev)}} />
          
          <AnimatePresence>
            {
              navbar &&
              <motion.ul 
                className={style.resnavlist}
                onClick={() => {if (!navAnimation) setNavbar(false)}}
                onAnimationStart={() => setNavAnimation(true)}
                onAnimationComplete={() => setNavAnimation(false)}
                initial={{ opacity: 0, transform: "translateY(-50px)" }}
                animate={{ opacity: 1, transform: "translateY(0)" }}
                exit={{ opacity: 0, transform: "translateY(-50px)" }}
                transition={{
                  duration: .5,
                  ease: [0.15, 0.8, 0.5, 1]
                }}
              >
                <li className={style.resnavlink}><a className={navAnimation ? style.disabled : undefined} href='#project'>Projeto</a></li>
                <li className={style.resnavlink}><a className={navAnimation ? style.disabled : undefined} href='#about-us'>Quem somos?</a></li>
                <li className={style.resnavlink}><a className={navAnimation ? style.disabled : undefined} href='#objectives'>Motivação</a></li>
                <li className={style.resnavlink}><a className={navAnimation ? style.disabled : undefined} href='#development'>Desenvolvimento</a></li>
                <li className={style.resnavlink}><a className={navAnimation ? style.disabled : undefined} href='#results'>Resultados</a></li>
                <li className={style.resnavlink}><a className={navAnimation ? style.disabled : undefined} href='https://beacons.ai/tcc_cp'>Documentação</a></li>
              </motion.ul>
            }
          </AnimatePresence>
          
        </nav>
      </header>

      <div className={style.hero}>
        <div className={style.title}>
          <h1>Desenvolvimento de uma Solução para Monitoramento de Presença e Engajamento para o Cursinho Popular da Escola Politécnica da Universidade de São Paulo</h1>
        </div>

        <Button to='https://beacons.ai/tcc_cp'>Links do Projeto</Button>
      </div>

      <main className={style.content}>
        <section id='project' className={[style.section, style.whatis].join(' ')}>
          <SectionTitle title='Projeto' />

          <p>O projeto Desenvolvimento de uma Solução para Monitoramento de Presença e Engajamento para o Cursinho Popular da Escola Politécnica da Universidade de São Paulo é o trabalho de conclusão do curso de Engenharia de Computação dos alunos Lucas Pavan Garieri, Pedro Henrique Rodrigues de Viveiros e Victor de Almeida Santana, orientado pelo professor Dr. Fábio Levy Siqueira.</p>
          <p>O trabalho consiste em um sistema para gerenciamento de presença de alunos desenvolvido em parceria com o Cursinho Popular da Poli (CP), uma instituição social que leva educação gratuita para alunos de baixa renda que desejam passar no vestibular. Dessa forma, o objetivo é proporcionar ao CP uma maneira automatizada, mais rápida e livre de erros manuais para acompanhar métricas de frequência de seus alunos.</p>
          <p>O trabalho é composto por duas plataformas: uma aplicação web e um aplicativo mobile. O primeiro é voltado aos professores e demais pessoas que fazem parte da gestão do cursinho e permite gerenciar as aulas e a presença de seus alunos e monitorar métricas de frequência. Já o segundo é voltado aos alunos do cursinho e permite acompanhar sua grade horária e, principalmente, marcar sua própria presença no sistema.</p>
          
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

          <p>O presente trabalho visa combater uma das grandes dificuldades enfrentadas pela administração do Cursinho Popular da Poli: a evasão de alunos. Por se tratar de uma instituição social, o CP oferece aulas gratuitas e diversos auxílios para alunos de baixa renda em período de vestibular. Para isso, o cursinho usa a frequência dos alunos como forma de controlar a evasão e a distribuição de benefícios.</p>
          <p>No entanto, no decorrer do curso, é notável que muitos alunos acabam despriorizando os estudos. Graças a isso, o CP também usa tais métricas para fazer intervenções, quando percebido o distanciamento de um aluno, para oferecer ajuda e tentar recuperá-lo. Porém, em razão do método de monitoramento de presença atual (listas de presença assinadas), os voluntários não têm visibilidade dessa evasão até que seja tarde demais para qualquer atuação.</p>
          <p>Isso ocorre porque o trabalho de compilar a lista de presença em planilhas do Google é muito custoso em termos de tempo, de modo que essa tarefa é deixada em segundo plano pelos voluntários. Assim, as métricas de presença dos alunos acabam ficando desatualizadas, gerando atrasos de até 2 meses, e os voluntários perdem a noção de quando a evasão começa a se tornar um problema e de qual o melhor momento para uma intervenção.</p>
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
            <h5>Gerenciamento de Aulas</h5>

            <p>A aplicação web conta com um ambiente completo para gerenciamento de aulas, turmas, matérias e alunos. Dessa forma, o Cursinho Popular da Poli pode cadastrar novos alunos, criar, editar e excluir turmas e matérias e agendar diferentes aulas, conseguindo gerenciar e digitalizar toda a logística de seu funcionamento. Além disso, a aplicação mobile permite visualizar as aulas agendadas e a grade horária da semana.</p>

            <div className={style['home-img']}>
              <img className={style['web-img']} src={HomeWebIMG} />

              <div className={style['row-img']}>
                <img className={style['mob-img']} src={HomeMobileIMG} />
                <img className={[style['mob-img'], style['res-img']].join(' ')} src={AttMobileIMG} />
              </div>
            </div>
          </div>

          <div className={style.subsection}>
            <h5>Controle de Presença</h5>

            <div className={style.architecture}>
              <img className={[style['feat-img'], style['left-img']].join(' ')} src={AttendanceWebIMG} />
              <p>A aplicação web permite que os professores controlem os parâmetros referentes à frequência dos alunos, como abrir e fechar a marcação da presença, alterar a palavra-chave da aula e marcar manualmente a presença de um aluno, prevendo questões de segurança. Além disso, é possível configurar horários para que a frequência abra e feche de maneira automática, retirando a necessidade de entrar na aplicação no meio da aula.</p>
            </div>
          </div>

          <div className={style.subsection}>
            <h5>Métricas</h5>

            <div className={style.architecture}>
              <img className={[style['feat-img'], style['right-img']].join(' ')} src={MetricsWebIMG} />
              <p>Para prover dados e insights sobre a evasão dos alunos e permitir que o cursinho acompanhe essas informações de forma mais eficiente, o sistema conta com uma parte dedicada de métricas. Dessa forma, é possível acompanhar o índice de frequência dos alunos, turmas e disciplinas, total de alunos presentes em cada aula e histórico diário de frequência de diferentes turmas e disciplinas. Assim, o CP consegue não apenas identificar a evasão de alunos, mas também entender se ela está relacionada a outros fatores, como um período do ano ou uma turma ou matéria específica, e tomar ações direcionadas que melhor se adequam para o caso do aluno.</p>
            </div>
          </div>

          <div className={style.subsection}>
            <h5>Arquitetura</h5>

            <div className={style.architecture}>
              <img className={[style['arch-img']].join(' ')} src={ArchitectureIMG} />
              <p>O desenvolvimento do projeto foi feito seguindo as arquiteturas MVT, implementada de forma natural pelo Django, clean architecture e flux architecture, implementada a partir da biblioteca Redux. A clean architecture está presente, principalmente, no mobile, garantindo o isolamento das camadas e a padronização de entidades e casos de uso e tornando o código modular e escalável. Já o Redux está presente na plataforma web, de forma a gerenciar melhor os estados e sua lógica de atualização, dada a maior complexidade dessa aplicação. Além disso, o sistema web também implementa alguns conceitos de clean architecture para a padronização de entidades e casos de uso ao longo de todo o sistema.</p>
            </div>
          </div>
        </section>

        <section id='results' className={[style.section, style.results].join(' ')}>
          <SectionTitle title='Resultados' />

          <p>Para validação do sistema com o Cursinho Popular da Poli, foi feito um cronograma de testes que abarca três diferentes fases e métodos de validação: Teste de Usabilidade, Teste Prático Controlado e Pesquisa de Feedback.</p>

          <div className={style.subsection}>
            <h5>Teste de Usabilidade</h5>
            <p>Foram feitas entrevistas com seis usuários do sistema, três alunos e três membros do CP, nas quais foi pedido que os entrevistados seguissem determinados fluxos como “Agendar uma aula para Terça-feira às 19h” ou “Marcar sua presença na aula de hoje”. Essa abordagem visa validar a jornada do usuário com o uso do aplicativo, bem como ter um feedback mais imediato e intimista que pode gerar melhorias para a versão do teste prático controlado.</p>
          </div>
          
          <div className={style.subsection}>
            <h5>Teste Prático Controlado</h5>
            <p>Foram selecionados alguns professores e alunos do CP para participar de um teste de simulação do comportamento real da aplicação em um ambiente controlado. Um ambiente foi configurado no sistema, com os alunos, turmas e disciplinas participantes, e, durante 2 semanas, os voluntários utilizaram as aplicações naturalmente no seu cotidiano. Essa abordagem visa, justamente, simular um cenário real para recolher feedbacks mais gerais do uso da aplicação e identificar possíveis erros, vulnerabilidades e melhorias.</p>
          </div>

          <div className={style.subsection}>
            <h5>Pesquisa e Feedback</h5>
            <p>Por fim, pediu-se que os alunos e professores participantes do Teste Prático Controlado preenchessem um formulário para recolher opiniões e sugestões a respeito de ambas as plataformas. Essa etapa visa formalizar, de maneira mais estruturada, as opiniões, notas, experiência e sugestões dos usuários em relação ao sistema.</p>
          </div>

          <div className={[style.subsection, style.centered].join(' ')}>
            <table className={style.table}>
              <thead className={style.theader}>
                <tr>
                  <th>Aspecto Avaliado</th>
                  <th>Nota Média</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Experiência geral do sistema</td>
                  <td>4.17</td>
                </tr>
                <tr>
                  <td>Intuitividade do sistema </td>
                  <td>4.50</td>
                </tr>
                <tr>
                  <td>Beleza, clareza e organização da interface</td>
                  <td>4.83</td>
                </tr>
                <tr>
                  <td>Curva de aprendizado do sistema</td>
                  <td>4.00</td>
                </tr>
              </tbody>
            </table>

            <p>Concluiu-se que o sistema propõe uma maneira eficiente de substituir a lista de presença e a necessidade de computá-la manualmente, além de oferecer aos alunos maior acessibilidade à sua frequência. Além disso, tanto alunos quanto professores avaliaram positivamente a experiência e a interface, com notas médias superiores a 4, numa escala de 1 a 5. Por fim, os voluntários do cursinho relataram que o sistema anulou o atraso no processo de presença, fazendo com que a solução atingisse os objetivos iniciais.</p>
          </div>
        </section>
      </main>
    </div>
  )
}
