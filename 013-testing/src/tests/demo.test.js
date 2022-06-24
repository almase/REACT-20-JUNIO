
import {iniciales} from '../../Componentes/funciones.js'



test('comprobar si me llega ocn espacios en blanco',()=>{

    //1-inicialización
    const m1 ="Prueba";

    //2-Estímulo

    const m2=m1.trim();

    //3- Observar si recibo lo esperado

    expect(m1).toBe(m2);

})

test ('iniciales',()=>{
    const resultado=iniciales('Al','Be','To');
    expect(resultado).toBe('ABT');

})