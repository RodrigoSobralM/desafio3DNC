import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PROJETOS_MOCK } from './mock/projetos.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App data={PROJETOS_MOCK}/>
  </React.StrictMode>,
)
