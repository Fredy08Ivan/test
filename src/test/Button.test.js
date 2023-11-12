// Comienza la estructura del script como si fuera un programa de react
import React from 'react';
// Importamos la libreria de React Testing Library y las funciones que
// que se van a utilizar para el test
import { render, fireEvent } from '@testing-library/react';
// Mandamos a llamar el componente del cual se va a realizar los test
// Lo llamamos con una variable y buscamos la direccion de donde se 
// encuentra el archivos del boton programado
import Button from '../components/Button';

// Podemos comenzar a escribir el script con describe para colocar
// todos los tests en una sola funcion o solamente los testes
// individuales

// El primer test a realizar seria el test del rederizado del boton
// dentro del DOM iniciamos el test con la palabra reservada
// luego se le puede colocar una descripcion al test
test('Renderizar el botón correctamente', () => {
  // El siguiente codigo comienza a buscar el elemento al cual se 
  // comenzara a redenrizar en un entorno de prueba simulado
  // se le especifica dentro de los parentesis con el cual
  // tendra que buscar por una propiedad nombrada click me
  const { getByText } = render(<Button label="Click Me" />);
  // Luego se comienza a buscar un elemento que contenga el texto
  // click me en la interfaz de usuario simulada por lo que el resultado
  // que se obtenga dentro de la busqueda se almacenara en la variable
  // ButtonElement
  const buttonElement = getByText('Click Me');

  // Al final de este test se usa la libreria de Jest en conjunto con testing
  // Library, por lo que la propiedad expect no es mas que las expectativas
  // que se espera que el elemento buttonElement luego se nos presenta
  // la siguiente propiedad toBeInTheDocument esta propiedad tiene la funcion
  // de comprobar a que el componente este dentro del DOM

  expect(buttonElement).toBeInTheDocument();
});


      //Lo mismo de arriba 
test('Ejecutar la función onClick cuando se hace clic en el botón', () => {
  // Las siguientes funciones utilizadas son las de Jest el cual esta pasando
  // por medio de la variable onClickMock por lo que se esta realizando una funcion
  // simulada acompañada  de jest.fn que da un seguimiento de las llamadas de la funcion
  // y asi poder proporcionar una funcionalidad especifica de la prueba
  const onClickMock = jest.fn();
  // Luego al utilizar la funcion render lo que se busca es que el componente se este
  // renderizando por lo que se busca de igual forma un elemento dentro del programa
  // con una etiqueta Click Me y luego la funcion de onClick que se le esta pasando onClickMock
  // en el cual va a relizar una funcion
  const { getByTestId } = render(
    <Button label="Click Me" onClick={onClickMock} />
  );

  // Luego esta la siguiente variable el cual se le esta pasando  una funcion el cual
  // es buscar un elementro el cual tenga un identificador esto lo esta realizando getByTestId
  // lo que esta buscando es que tenga el siguiente identificador custom-button
  const buttonElement = getByTestId('custom-button');

  // Luego procede a realizar un fire event o el disparo de un evento esta es un propiedad de react test
  // el cual esta realizando un click al elemento dentro del parentesis buttonElement

  fireEvent.click(buttonElement);

  // Por ultimo se esta realizando las expectativas por lo cual se espera a que
  // el boton este realizando correctamente los clicks dentro del DOM.

  expect(onClickMock).toHaveBeenCalled();
});
