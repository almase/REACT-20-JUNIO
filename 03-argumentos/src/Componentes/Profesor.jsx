import React from 'react'

function Profesor(props) {
    //He usado Fragment
   
    return (
        <>
            <p>Nombre: { props.nombre } </p>
            <p>Apellidos: {props.apellidos} </p>
            <p>edad: {props.edad} </p>
            <p>Salario neto {}</p>
        </>
    )
}

export default Profesor