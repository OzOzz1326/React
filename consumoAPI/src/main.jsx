import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Ordo from './Ordo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Ordo/>
  </StrictMode>,
)
