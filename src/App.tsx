import { Routes, Route } from "react-router";
import { Navigation } from './pages/navigation/navigation'
import { TCC } from "./pages/tcc/tcc";
import './App.css'

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route index element={<Navigation />} />
        <Route path="tcc" element={<TCC />} />
      </Routes>
    </div>
  )
}

export default App
