import React, { useState, useEffect } from 'react'

function Empleado() {

    //Array de Empleados
    const [empleados, setEmpleados] = useState([]);
   

    //Objecto Empleado utilizar en el FORMULARIO
    const [empleado, setempleado] = useState({
        dni: '',
        nombre: '',
        apellidos: '',
        edad: ''
    });
    // 

    const [url, seturl] = useState('http://localhost:4000/empleados');

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setEmpleados(data));
    }, [url])

    function controlar(e) {
        setempleado({ ...empleado, [e.target.name]: e.target.value })
    }


    function grabar(evento) {
        evento.preventDefault();
      
        //Añado el nuevo empleado al array empleados
        setEmpleados([...empleados, empleado]);

        //Limpiar los datos del formulario
        setempleado({
            dni: '',
            nombre: '',
            apellidos: '',
            edad: 0
        });
    }

    return (
        <div>
            <h2>LISTA EMPLEADOS</h2>
            {empleados.map(empleado => {
                return <p key={empleado.dni}>{empleado.nombre}  {empleado.apellidos}</p>
            })}
            <h2>Añadir Empleado</h2>
            <form onSubmit={grabar}>
                <label>DNI</label>
                <input type="text" value={empleado.dni} name="dni" onChange={controlar} />
                <br></br>                         
                <label>Nombre</label>
                <input type="text" value={empleado.nombre} name="nombre" onChange={controlar} />
                <br></br>
                <label>Apellidos</label>
                <input type="text" value={empleado.apellidos} name="apellidos" onChange={controlar} />
                <br></br>
                <label>Edad</label>
                <input type="text" value={empleado.edad} name="edad" onChange={controlar} />
                <br></br>
                <input type="submit" value="Añadir empleado" />
            </form>


        </div >
    )
}

export default Empleado



