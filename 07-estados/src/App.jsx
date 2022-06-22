import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Salario from './Componentes/Salario';
import Salario_controlled from './Componentes/Salario_controlled';
import Iniciales_controlled from './Componentes/Iniciales_controlled';

function App() {
  let contador=0;

  return (
    <div>
      <Iniciales_controlled />
    </div>

  )
    
}

export default App
