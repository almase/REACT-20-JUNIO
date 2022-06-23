
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Imperio from '../Componentes/Star Wars/Imperio';
import Klingon from '../Componentes/Star Trek/Klingon';
import Federacion from '../Componentes/Star Trek/Federacion';
import Rebeldes from '../Componentes/Star Wars/Rebeldes';
import Principal from '../Componentes/Principal';



function RutasPeliculas() {
  return (

    <Routes>
       <Route path="/"  element={<Principal />} />
       <Route path="/imperiales" element={<Imperio />} /> 
       <Route path="/rebeldes" element={<Rebeldes />} /> 
       <Route path="/starttrek/klingon" element={<Klingon />} /> 
       <Route path="/federacion" element={<Federacion />} /> 
    </Routes>
  )
}

export default RutasPeliculas


 