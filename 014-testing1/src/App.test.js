import { render, screen } from '@testing-library/react';
import App from './App';
import {devolverNulo} from './funciones.js'

/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

test('Probar toBe', ()=>{
  const x=1;
  const x1=1;

  expect(x).toBe(x1);

})

test('Probar si algo es nulo',()=>{
  const nulo=devolverNulo();
  expect(nulo).toBeNull();
  
})
