import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Formularios from './formularios.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Formularios/>
  </StrictMode>,
)
