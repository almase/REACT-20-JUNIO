import React from 'react'
import { Link } from 'react-router-dom'

function Principal() {
  return (
    <div>
        <h2>ENLACES A PELICULAS</h2>
        <div>
            <Link to="/imperiales"> Imperiales</Link>

        <Link to="/rebeldes"> Rebeldes</Link>

        <Link to="/klingon">  klingon</Link>

        <Link to="/federacion"> Federacions</Link>
        </div>
    


    </div>
  )
}

export default Principal