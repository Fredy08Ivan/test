import React, { useState } from 'react';

//Creamos el Formulario

const Formulario = () => {
  //Creamos una variable donde se capturan los datos
  //dentro del formulario
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  //El cambio de estado del componenete nombre
  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  //El cambio de estado del componenete nombre
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (

    //La estructura del formulario
    <form>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        {/* El input del formulario donde se capturan los datos de nombre */}
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={handleNombreChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        {/* El input del formulario donde se capturan los datos de nombre */}
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
    </form>
  );
};

export default Formulario;
