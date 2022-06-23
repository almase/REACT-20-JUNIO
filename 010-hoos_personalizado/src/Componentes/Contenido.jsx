import React from 'react'

function Contenido({ elemento }) {
    let longitud=elemento.body.length;

    return (
        <tr key={elemento.id}>
            <td>{elemento.id}</td>
            <td>{elemento.title.toUpperCase()}</td>    
            <td>{longitud} </td>
        </tr>
    )
}

export default Contenido