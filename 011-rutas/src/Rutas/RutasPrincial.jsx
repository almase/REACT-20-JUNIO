import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Administracion from '../Componentes/Administracion'
import Informes from '../Componentes/Informes'
import Marketing from '../Componentes/Marketing'
import RutasPeliculas from './RutasPeliculas'

function RutasPrincial() {
  return (
    <>
    <Routes>
        
       <Route path="/informes"  element={ <Informes />} />
       <Route path="/administracion"  element={ <Administracion />} />
       <Route path="/marketing"  element={ <Marketing />} />
    </Routes>
    <RutasPeliculas />
    </>
  )
}

export default RutasPrincial