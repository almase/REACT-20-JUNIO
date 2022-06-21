import React from 'react'

function Profesor(props) {
    //He usado Fragment
   
    return (
        <>
            <p>Nombre: { props.nombre } </p>
            <p>Apellidos: {props.apellidos} </p>
            <p>edad: {props.edad} </p>
            <p>Salario: {props.salario}</p>
            <p>IRPF: {props.irpf}</p>
            <p>Salario neto { props.salario-(props.salario*props.irpf/100) }</p>
        </>
    )
}

export default Profesor