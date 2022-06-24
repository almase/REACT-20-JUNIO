import logo from './logo.svg';
import './App.css';
import Alumno from './Componentes/Alumno';
import {useState} from 'react';

function App() {
  const [first, setfirst] = useState(0);
  return (
    <div className="App">
        <h2> aplicacion REACT</h2>
        <Alumno prop1="hola"/>
        <h2>learn react</h2>
    </div>
  );
}

export default App;
