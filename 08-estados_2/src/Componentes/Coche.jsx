import React, { useState } from 'react'

function Coche() {

    const [fabricantes, setfabricantes] = useState(['Renault', 'BMW', 'Fiat', 'Citroen']);
    const [tipos, setTipos]=useState(['deportivo','familiar','4x4']);
    const [valor, setValor]=useState('');
    const [valor_tipo,setValorTipo]=useState('');
    
    

    function agregarFabricante(evento){
        
        setfabricantes([...fabricantes,valor]);
        console.log(evento);
        evento.preventDefault();
        setValor('');
    }

    function agregarTipo(evento){
        
        setTipos([...tipos,valor_tipo]);
        console.log(evento);
        evento.preventDefault();
        setValorTipo('');
    }

    return (
        <div>
            <h2>FABRICANTES DE COCHES</h2>
            <ul>
                {fabricantes.map(fabricante => {
                    return <li key={fabricante}>{fabricante}</li>
                })}
            </ul>
            
            <h2>TIPOS DE COCHE</h2>
            <select name="select" onChange={(e)=>console.log(e.target.value)}>
                {tipos.map(tipo => {
                    return <option key={tipo} value={tipo}>{tipo}</option>
                })}
                
            </select>
            <form onSubmit={agregarFabricante}>
                <h2> AÑADIR FABRICANTE</h2>
                <input type="text" value={valor} onChange={(e)=>setValor(e.target.value)}></input>
                <br/>
                <button type="submit"> Añadir Fabricante</button>
            </form>

            <form onSubmit={agregarTipo}>
                <h2> AÑADIR TIPO</h2>
                <input type="text" value={valor_tipo} onChange={(e)=>setValorTipo(e.target.value)}></input>
                <br/>
                <button type="submit"> Añadir Tipo</button>
            </form>
        </div>
    )
}

export default Coche