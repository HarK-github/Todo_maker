import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import Main from './main_Page.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Main />
  </StrictMode>,
)
