
function DatosPersonales(){
    return (
          <div >
              <p>nombre: Alberto</p>
              <p>Edad: 60</p>
              <p>Trabajo: profesor </p>
              <DatosPersonales1 />
          </div>
    )
  }

  //Arrow Functions
  const DatosPersonales1=()=>{
      return (
          <div>
              <p>nombre: Rosa</p>
              <p>Edad: 61</p>
              <p>Trabajo: profesor </p>
             
          </div>
    )
  }

  export default DatosPersonales ;