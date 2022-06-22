import React from 'react'

function Salario() {

  let nombre="pepe";

  function calcularSalario(){
    let salario=parseInt(document.getElementById("salario").value);
    let irpf=parseInt(document.getElementById("irpf").value);
    console.log(salario);
    console.log(irpf);
    document.getElementById("p1").innerHTML=salario*irpf;

  }
  return (
    <div>
     <h2> Calculo de salario</h2>
     <br/>
     <p>Salario</p>
     <input type="text" name="salario" id="salario"/>
     <p>IRPF</p>
     <input type="text" name="irpf" id="irpf"/>
    <br/>
    <button onClick={calcularSalario}>Calcular Salario</button>
    <h3>RESULTADO</h3>
    <p> El salario neto es </p> <p id="p1"></p>
    </div>
  )
}

export default Salario