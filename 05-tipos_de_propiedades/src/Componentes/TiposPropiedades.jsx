import React from 'react'
//importamos PropTypes
import PropTypes from 'prop-types'

function TiposPropiedades({ nombre, edad, salario=900, casado }) {
  return (
    <>
      <h2>  { nombre}  {edad}  {salario} {(casado)?"Casado":"soltero"}</h2>
    </>
  )
}

TiposPropiedades.propTypes={
   nombre: PropTypes.string,
   edad: PropTypes.number,
   salario: PropTypes.number,
   casado: PropTypes.bool
}

TiposPropiedades.defaultProps={
    edad: 18,
    nombre: "Sin nombre"
}

export default TiposPropiedades