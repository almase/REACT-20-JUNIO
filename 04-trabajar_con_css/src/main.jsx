import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Cabecera from './Componentes/Cabecera'
import Navegacion from './Componentes/Navegacion'
import './index.css'

ReactDOM.createRoot(document.getElementById('cabecera')).render(
  <Cabecera />
)

ReactDOM.createRoot(document.getElementById('enlaces')).render(
  <Navegacion />
)
