import React from 'react'
import '../Estilos/boton.css'

function Boton({ metodo, texto, estilo }) {
    /*
    Version inicial
    let clase = "boton-normal";
    if (estilo) clase = "boton-normal"; else clase = "boton-reset";
    <button onClick={metodo} className={clase}> {texto} </button>
    */
    return (
        <button onClick={metodo} className={(estilo)?"boton-normal":"boton-reset"}> {texto} </button>
    );

}

export default Boton