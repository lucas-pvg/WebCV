import { Routes, Route, useNavigate } from "react-router";
import { Navigation } from './pages/navigation/navigation'
import { TCC } from "./pages/tcc/tcc";
import './App.css'

interface DownloadProps {
  fileName: string
}

function Download({ fileName }: DownloadProps) {
  const navigate = useNavigate()

  window.location.href = `/tcc-files/${fileName}`
  navigate('/tcc')
  return null
}

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route index element={<Navigation />} />
        
        <Route path="tcc">
          <Route index element={<TCC />} />
          <Route path="download/banner" element={<Download fileName="Banner.pdf" />} />
          <Route path="download/thesis" element={<Download fileName="Desenvolvimento de uma solução para monitoramento de presença e engajamento para o Cursinho Popular da Escola Politécnica da Universidade de São Paulo.pdf" />} />
          <Route path="download/release" element={<Download fileName="Press Release.pdf" />} />
        </Route>
        
      </Routes>
    </div>
  )
}

export default App
