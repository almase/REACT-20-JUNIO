import React,{useContext} from 'react'
import {UsuarioContext} from './ProbarContext'

function Componente2() {
    const pepito = useContext(UsuarioContext);
    console.log(UsuarioContext)
  return (
    <div>Componente2
        <p>{pepito}</p>
    </div>
  )
}

export default Componente2