import React from 'react'
import { useState } from 'react'

function Salario_controlled() {

  const [salario,setSalario]=useState(0);
  const [irpf,setIrpf]=useState(0);
  const [resultado, setresultado] = useState(0)
  
  function calcularSalario(){
  
    setresultado(salario*irpf);

  }
  
  return (
    <div>
     <h2> Calculo de salario</h2>
     <br/>
     <p>Salario</p>
     <input type="text" name="salario" id="salario" value={salario} onChange={(e)=>setSalario(e.target.value)}/>
     <p>IRPF</p>
     <input type="text" name="irpf" id="irpf" value={irpf} onChange={(e)=>setIrpf(e.target.value)}/>
    <br/>
    <button onClick={calcularSalario}>Calcular Salario</button>
    <h3>RESULTADO</h3>
    <p> El salario neto es </p> <p>{resultado}</p>
    </div>
  )
}

export default Salario_controlled