
import './App.css'
import Alumno from './Componentes/Alumno'
import Profesor from './Componentes/Profesor'

function App() {
  return (
    <>
      <Profesor nombre="alberto" apellidos="XXXXXXXX" edad={90} salario={1000} irpf={15} />
      <Alumno nombre="rosa" apellidos="fdfdsfdss" edad={20} />
    </>
  )

}

export default App
