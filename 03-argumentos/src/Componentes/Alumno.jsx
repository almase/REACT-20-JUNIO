import React from 'react'

function Alumno({ nombre, apellidos }) {
    //He usado Fragment y desestructuración

    return (
        <>
            <p>Nombre: {nombre}   {typeof (nombre)} </p>
            <p>Apellidos: {apellidos} </p>
        </>
    )
}

export default Alumno;