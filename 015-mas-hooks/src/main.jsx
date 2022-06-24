import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Componente1 from './Componentes/Componente1'
import ProbarContext from './Componentes/ProbarContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProbarContext />
  </React.StrictMode>
)
