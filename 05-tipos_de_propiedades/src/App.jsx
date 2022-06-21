import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import TiposPropiedades from './Componentes/TiposPropiedades'
function App() {



  return (
   <TiposPropiedades  nombre="alberto"  edad={90}  salario={1000} casado={true} />
  )
}
// <TiposPropiedades  nombre="alberto"  edad={60}  salario={1000} casado={true} />
export default App
