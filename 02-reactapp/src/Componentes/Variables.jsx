import React from 'react'
import { iniciales } from './Funciones';


function Variables() {
    const nombre = "Alberto";
    const apellidos = "klkñklkk";
    const verdad=false;
    const n=100;
    const array1=[1,30,45];
    const coche={
        matricula: "jjjj",
        pvp: 1000
    }

    return (
        <div>
            <h2>PROBAR DISTINTAS VARIABLES</h2>
            <p> { nombre }</p>
            <p> { 1 + 3 } </p>
            <p> { apellidos.toUpperCase() }</p>
            <p> { verdad? "Si":"No"} </p>
            <p> { n+"90"}</p>
            <p> { n+parseInt("90")}</p>
            <p> {array1}</p>
            <p> { JSON.stringify(coche)} </p>
            <p>{ coche.matricula} </p>
            <p> { iniciales("alberto","rodriguez","vasfk").toUpperCase() }        </p>
        </div>
    )
}

export default Variables