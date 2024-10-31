import { Cover } from './pages/cover/cover'
import { Profile } from './pages/profile/profile'
import { Experience } from './pages/experience/experience'
import { Skills } from './pages/skills/skills'
import { Education } from './pages/education/education'
import './App.css'

function App() {
  return (
    <div className='app'>
      <Cover />
      <Profile />
      <Experience />
      <Skills />
      <Education />
    </div>
  )
}

export default App
