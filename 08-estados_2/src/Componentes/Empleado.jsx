import React from 'react'
import { useState } from 'react'

function Empleado() {

  const [empleado,setEmpleado]=useState({
    nombre: 'Raul',
    apellidos: 'Rodriguez Garia',
    edad: 29

  })

  const cambiarNombre=(evento)=>{
     setEmpleado({...empleado,[evento.target.name]: evento.target.value})

  }

  function visualizarEmpleado(e){
    console.log(empleado);
    e.preventDefault();

  }

  return (
    <form onSubmit={visualizarEmpleado}>
        <h2> EMPLEADO</h2>
                <input name="nombre" type="text" value={empleado.nombre} onChange={cambiarNombre}></input>
                <br/>
                <input name="apellidos" type="text" value={empleado.apellidos} onChange={cambiarNombre}></input>
                <br/>
                <input name="edad" type="text" value={empleado.edad} onChange={cambiarNombre}></input>
                <br/>
                <button type="submit"> Acpetar</button>
        
        
    </form>
  )
}

export default Empleado