import React,{useContext,useState,useRef} from 'react'
import {UsuarioContext} from './ProbarContext'

function Componente2() {
    const usuario = useContext(UsuarioContext);
    //const [numero_render, setnumero_render] = useState(0)
    const [caja, setcaja] = useState("")
    const numero_render=useRef(0);
    
  function cambiar(e){
    numero_render.current=numero_render.current+1;
    console.log(numero_render);
    setcaja(e.target.value);
      
  }
  
  return (
    <div>Componente2
        <p>{usuario}</p>
     <input type="text" value={caja} onChange={cambiar}/>
     <h2>Voy por la renderización {numero_render.current}</h2>
    </div>

  )
}

export default Componente2