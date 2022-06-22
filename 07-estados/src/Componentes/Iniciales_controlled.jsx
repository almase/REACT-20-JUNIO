import React,{useState} from 'react'


function Iniciales_controlled() {
    const [nombre, setNombre] = useState("");
    const [ape1, setApe1] = useState("");
    const [ape2, setApe2] = useState("");
    const [resultado, setresultado] = useState("") 
    function calcular_iniciales() {
  
        setresultado( `${nombre[0]}.${ape1[0]}.${ape2[0]}`    );
  
    }
  
    return (
      <div>
        <h2> Calculo de salario</h2>
        <br />
        <p>Nombre</p>
        <input type="text" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <p>Apellido1</p>
        <input type="text" name="ape1"  value={ape1} onChange={(e) => setApe1(e.target.value)} />
        <br />
        <p>Apellido2</p>
        <input type="text" name="ape2"  value={ape2} onChange={(e) => setApe2(e.target.value)} />
        <br />
        <button onClick={calcular_iniciales}>Iniciales</button>
        <br/>
        <p> Las iniciales son {resultado} </p>
      </div>
    )
}

export default Iniciales_controlled