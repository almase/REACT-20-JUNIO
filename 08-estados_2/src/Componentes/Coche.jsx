import React, { useState } from 'react'

function Coche() {

    const [fabricantes, setfabricantes] = useState(['Renault', 'BMW', 'Fiat', 'Citroen']);
    const [tipos, setTipos]=useState(['deportivo','familiar','4x4']);
    const [valor, setValor]=useState('');


    return (
        <div>
            <h2>FABRICANTES DE COCHES</h2>
            <ol>
                {fabricantes.map(fabricante => {
                    return <li>{fabricante}</li>
                })}
            </ol>
            
            <h2>TIPOS DE COCHE</h2>
            <select name="select" onChange={(e)=>console.log(e.target.value)}>
                {tipos.map(tipo => {
                    return <option value={tipo}>{tipo}</option>
                })}
                
            </select>
            <form>
                <h2> AÑADIR FABRICANTE</h2>
                <input type="text" value={valor} onChange={(e)=>e.target.value}></input>
                <button type="submit"> Añadir Fabricante</button>
            </form>
        </div>
    )
}

export default Coche