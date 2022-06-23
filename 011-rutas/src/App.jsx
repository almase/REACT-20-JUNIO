import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import RutasPrincial from './Rutas/RutasPrincial'
import {BrowserRouter} from 'react-router-dom'
import Marketing from './Componentes/Marketing'

function App() {

  return (
    <BrowserRouter>
      <RutasPrincial />
    </BrowserRouter>
  )
}

export default App
