import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Aside from './Componentes/Aside'
import Cabecera from './Componentes/Cabecera'
import Navegacion from './Componentes/Navegacion'
import Seccion from './Componentes/Seccion'
import './index.css'
import readTextFile from '../src/Libreria/ficheros'


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
  <Aside texto={ "dfsdfsffd"}/>
)

//Seccion
ReactDOM.createRoot(document.getElementById('seccion')).render(
  <Seccion />
)