import { useEffect, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router";
import { Navigation } from './pages/navigation/navigation'
import { TCC } from "./pages/tcc/tcc";
import './App.css'

interface DownloadProps {
  fileName: string
}

function Download({ fileName }: DownloadProps) {
  const navigate = useNavigate()

  useEffect(() => {
    const fileUrl = `/tcc-files/${fileName}`
    window.open(fileUrl, "_blank");

    // const link = document.createElement("a")

    // link.href = fileUrl
    // link.download = fileName
    // link.click()

    // const timeout = setTimeout(() => {
    //   navigate("/tcc")
    // }, 1000);

    // return () => clearTimeout(timeout)
  }, [fileName, navigate])

  return null
}

function App() {
  const appRef = useRef<HTMLDivElement | null>(null)

  return (
    <div ref={appRef} className='app'>
      <Routes>
        <Route index element={<Navigation />} />
        
        <Route path="tcc">
          <Route index element={<TCC appRef={appRef} />} />
          <Route path="download/banner" element={<Download fileName="Banner.pdf" />} />
          <Route path="download/thesis" element={<Download fileName="Desenvolvimento_de_uma_solução_para_monitoramento_de_presença_e_engajamento_para_o_Cursinho_Popular_da_Escola_Politécnica_da_Universidade_de_São_Paulo.pdf" />} />
          <Route path="download/release" element={<Download fileName="Press Release.pdf" />} />
        </Route>
        
      </Routes>
    </div>
  )
}

export default App
