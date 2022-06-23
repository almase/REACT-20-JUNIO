import React, { useState, useEffect } from 'react'

function Empleado() {

    const [empleados, setEmpleados] = useState([]);
    console.log(empleados)

    const [url, seturl] = useState('http://localhost:4000/empleados');

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setEmpleados(data));

    }, [url])



    return (
        <div>Empleado
            
        </div>


    )
}

export default Empleado



