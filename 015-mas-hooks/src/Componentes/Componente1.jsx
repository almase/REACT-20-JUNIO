import React,{useState} from 'react'
import Componente2 from './Componente2';

function Componente1() {
    const [usuario, setusuario] = useState("alberto");
  return (
    <div>Componente1
        <Componente2 usuario={usuario} />
    </div>

  )
}

export default Componente1