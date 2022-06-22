import React from 'react'
import { useState } from 'react';
import Boton from './Boton';

function Contador({ valor }) {

  const [contador, setcontador] = useState(valor);

  const aumentar = (e) => {
    console.log('has pulsado aumentar');
    console.log(e);
    console.log('Evento producido por ' + e.target.type + 'que se llama ' + e.target.name);
    setcontador(contador + 1);
  }

  const disminuir = (e) => {
    console.log('has pulsado aumentar');
    console.log(e);
    console.log('Evento producido por ' + e.target.type + 'que se llama ' + e.target.name);
    setcontador(contador - 1);
  }

  const cambiarcolor = (evento, color_recibido) => {
    console.log(evento);
    evento.target.style.backgroundColor = color_recibido;
  }

  function resetear() {
    setcontador(valor);
  }

  //Este ya no vale, porque hemos usado la anterior para los dos eventos
  const volvercolor = (e) => {
    console.log(e);
    e.target.style.backgroundColor = "blue";
  }

  return (
    <>
      <h1> Contador</h1>
      <h2>{contador}</h2>
      <Boton metodo={aumentar} texto="Aumentar" estilo={true}/>
      <Boton metodo={disminuir} texto="Disminuir" estilo={true}/>
      <Boton metodo={resetear} texto="resetear" estilo={false}/>

      <p  id="p1" onMouseOver={(e) => cambiarcolor(e, 'red')} onMouseLeave={(e) => cambiarcolor(e, 'blue')} style={{ 'backgroundColor': 'blue' }} >EJEMPLO DE EVENTO</p>
    </>
  )
}

export default Contador