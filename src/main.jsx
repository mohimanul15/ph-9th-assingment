import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Router/Router.jsx'
import AppContext from './AppContext/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContext>
      <Router></Router>
    </AppContext>
  </StrictMode>,
)
