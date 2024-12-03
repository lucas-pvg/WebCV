import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import App from './App.tsx'

import { ProfileContext } from './context/ProfileContext'
import { useProfileData } from './hooks/useProfileData'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProfileContext.Provider value={useProfileData()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProfileContext.Provider>
  </StrictMode>,
)
