import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Aside from './Componentes/Aside'
import Cabecera from './Componentes/Cabecera'
import Navegacion from './Componentes/Navegacion'
import './index.css'


//Cabecera
ReactDOM.createRoot(document.getElementById('cabecera')).render(
  <Cabecera />
)

//Navegacion
ReactDOM.createRoot(document.getElementById('enlaces')).render(
  <Navegacion />
)


//Lateral Aside
ReactDOM.createRoot(document.getElementById('lateral')).render(
  <Aside />
)
