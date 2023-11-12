import React from 'react';
// Importamos la libreria de React Testing Library y las funciones que
// que se van a utilizar para el test
import { render, fireEvent } from '@testing-library/react';
// Mandamos a llamar el componente del cual se va a realizar los test
// Lo llamamos con una variable y buscamos la direccion de donde se 
// encuentra el archivos del boton programado
import Formulario from '../components/Formulario';

// El primer test a realizar seria el test del rederizado del formulario completo
// dentro del DOM iniciamos el test con la palabra reservada
// luego se le puede colocar una descripcion al test
test('Renderizar el formulario correctamente', () => {

  // Se guarda en una variable el formulario completo y se renderiza
  const { getByLabelText } = render(<Formulario />);

  // Luego se comienza a buscar los input a los cuales se les realizara las pruebas
  // en este caso se estan buscando los campos los cuales tengan las etiquetas de
  // nombre y email
  const nombreInput = getByLabelText('Nombre:');
  const emailInput = getByLabelText('Email:');

  // Por ultimo al rederizarse el formulario completo las expectativas que se van a generar seran
  // los de que se encuentren los 2 inputs dentro del documento 
  // como tal terminando con el primer test

  expect(nombreInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
});

test('Capturar los valores del formulario', () => {
  // Volvemos a realizar el mismo proceso de renderizado con un pequeño cambio pero que 
  // sera de mucha utilidad y sera el getByDisplayValuue el cual buscara un elemento dentro del
  // DOM que buscara y seleccionara un valor en especifico con un valor dentro del mismo 
  const { getByLabelText, getByDisplayValue } = render(<Formulario />);

  // Se vuelven a llamar los inputs con las etiquetas correspondientes
  const nombreInput = getByLabelText('Nombre:');
  const emailInput = getByLabelText('Email:');

  // Luego llegan los eventos los cuales seran el de un cambio de estado el cual
  // insertara dentro de los inputs los valores correspondientes a un nombre y un correo
  // electronico
  fireEvent.change(nombreInput, { target: { value: 'John Doe' } });
  fireEvent.change(emailInput, { target: { value: 'john@example.com' } });

  // El teste realizara la introduccion de datos dentro del formulario por lo cual
  // seguira con la inspeccion del mismo, que se hayan insertado los datos como tal
  // por lo que evaluara a que los valores visualizados dentro del DOM sean los mismos que se 
  // se insertaron dentro de la prueba.

  const nombreValue = getByDisplayValue('John Doe');
  const emailValue = getByDisplayValue('john@example.com');

  // Por lo que para finalizar se evalua que los componentes o inputs como tal se hayan redenrizado con
  // normalidad y entren dentro del documento.

  expect(nombreValue).toBeInTheDocument();
  expect(emailValue).toBeInTheDocument();
});
