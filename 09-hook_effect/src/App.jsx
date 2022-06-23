import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Temporizador from './Componentes/Temporizador'
import Empleado from './Componentes/Empleado';
const emples = [{
  nombre: 'Raul',
  apellidos: 'Rodriguez Garia',
  edad: 29

}, {
  nombre: 'Rosa',
  apellidos: 'fdsdfdsfriguez Garia',
  edad: 34

}, {
  nombre: 'Pedro',
  apellidos: 'fdssfsdfdsfodriguez Garia',
  edad: 45

}];
function App() {


  return (
    <div>
      <h2>Ejmplo de HOOK</h2>
      <Empleado />
      <br/>
      <br/>
      <Temporizador  />
    </div>
  )
}

export default App
