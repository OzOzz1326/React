import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Empresas from './empresas.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Empresas/>
  </StrictMode>,
)
