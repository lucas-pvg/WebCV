// import { Sidebar } from './components/sidebar/sidebar'
// import { Header } from './components/header/header'

import { Cover } from './pages/cover/cover'
import { Profile } from './pages/profile/profile'
import './App.css'

function App() {
  return (
    <div className='app'>
      <Cover />
      <Profile />

      {/* <main className='app-grid'>
        <Header className='page-header' title='Profile' />
        <Sidebar className='page-sidebar' />

        <div className='page-content'>
          
        </div>
      </main> */}
    </div>
  )
}

export default App
