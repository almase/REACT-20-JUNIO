import { render, screen } from '@testing-library/react';
import App from './App';
import Prueba from './Componentes/Prueba';
import {devolverNulo, iniciales,calcular_salario} from './funciones.js'


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/aprender react/i);
   expect(linkElement).toBeInTheDocument();
});

test('Comprobar Boton',()=>{
  render(<App />);
  //const resultado=screen.getByRole("button",{name: "Cancelar"});
  //expect(resultado).toBeEnabled();
  expect(screen.getByRole("button",{name: "Cancelar"})).toBeEnabled();

})

//Comprobar si hay un texto
/*
test('comprobar autoria',()=>{
  render(<Prueba />) ;
  const resultado=screen.getByRole("heading");
  expect(resultado).toHaveTextContent(/CapGemini/)
});*/

//Comprobar con múltiples objetos
test('comprobar autoria',()=>{
  render(<Prueba />) ;
  const resultado=screen.getAllByRole("heading");
  expect(resultado[0]).toHaveTextContent(/CapGemini/)
});

test('Comprobar numero de headings', () => {
  render(<Prueba />) ;
  const resultado=screen.getAllByRole("heading").length
  expect(resultado).toBeGreaterThan(2);
});



test('Probar toBe', ()=>{
  const x=1;
  const x1=1;

  expect(x).toBe(x1);

})

test('Probar si algo es nulo',()=>{
  const nulo=devolverNulo();
  expect(nulo).toBeNull();
  expect(nulo).toBeFalsy();
  //expect(nulo).toBeTruthy();

  
})

test('Probar iniciales', () => { 
    const resultado=iniciales('Alberto','KKKK','RRRR');
    expect(resultado).toBe('A.K.R.');
 })


 test('Salario mínimo',()=>{
  const resultado=calcular_salario(1900   ,10);
  expect(resultado).toBeGreaterThan(900);

 })
