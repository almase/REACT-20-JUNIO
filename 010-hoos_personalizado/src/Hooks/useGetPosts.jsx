import { useEffect, useState } from "react";

function useGetFotos(url) {

const [datos,setDatos]=useState([]);


useEffect(() => {
   
    fetch(url)
    .then(response => response.json())
    .then(data => setDatos(data));

  return () => {
    console.log('Carga de posts finalizada, cerrando conexión');
  }
},[url])
return datos;

    
}

export default useGetFotos;