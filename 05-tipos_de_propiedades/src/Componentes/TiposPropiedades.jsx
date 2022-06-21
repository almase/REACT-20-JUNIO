import React from 'react'
//importamos PropTypes
import PropTypes from 'prop-types'

function TiposPropiedades({ nombre, edad, salario, casado }) {
  return (
    <>
      <h2>  { nombre}  {edad/10}  {salario} {(casado)?"Casado":"soltero"}</h2>
    </>
  )
}

TiposPropiedades.propTypes={
   nombre: PropTypes.string,
   edad: PropTypes.number,
   salario: PropTypes.number,
   casado: PropTypes.bool
}

export default TiposPropiedades