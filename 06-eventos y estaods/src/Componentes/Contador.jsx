import React from 'react'
import { useState } from 'react';
function Contador() {

  const  [contador, setcontador]=useState(0);

  


  const aumentar=(e)=>{
    console.log('has pulsado aumentar');
    console.log(e);
    console.log('Evento producido por '+e.target.type+ 'que se llama '+e.target.name);
    setcontador(contador+1);
  
 
  }  

  const disminuir=(e)=>{
    console.log('has pulsado aumentar');
    console.log(e);
    console.log('Evento producido por '+e.target.type+ 'que se llama '+e.target.name);
    setcontador(contador-1);
  }  

  const cambiarcolor=(evento,color_recibido)=>
  {
    console.log(evento);
     evento.target.style.backgroundColor=color_recibido;
  }

  //Este ya no vale, porque hemos usado la anterior para los dos eventos
  const volvercolor=(e)=>
  {
    console.log(e);
     e.target.style.backgroundColor="blue";
  }

  return (
    <>
       <h1> Contador</h1>
       <h2>{contador}</h2>
       <button name="a" onClick={(e)=>aumentar(e)}> Aumentar</button>
       <button name="b" onClick={disminuir}> Disminuir</button>   
       <p  id="p1" onMouseOver={(e)=>cambiarcolor(e,'red')}  onMouseLeave={(e)=>cambiarcolor(e,'blue')}  style={{'backgroundColor': 'blue' }} >EJEMPLO DE EVENTO</p>                                  
    </>
  )
}

export default Contador