import React, { useState } from 'react'

function Coche() {

    const [fabricantes, setfabricantes] = useState(['Renault', 'BMW', 'Fiat', 'Citroen']);

    return (
        <div>
            <h2>FABRICANTES DE COCHES</h2>
            <ol>
                {fabricantes.map(fabricante => {
                    return <li>{fabricante}</li>
                })}
            </ol>
        </div>
    )
}

export default Coche