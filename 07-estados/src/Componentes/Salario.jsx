import React from 'react'

function Salario() {

  let nombre="pepe";
  return (
    <div>
     <h2> Calculo de salario</h2>
     <br/>
     <p>Salario</p>
     <input type="text" name="salario" value={nombre}/>
     <p>IRPF</p>
     <input type="text" name="irpf" value=""/>
    <br/>
    <button>Calcular Salario</button>
    <h3>RESULTADO</h3>
    <p> El salario neto es </p>
    </div>
  )
}

export default Salario