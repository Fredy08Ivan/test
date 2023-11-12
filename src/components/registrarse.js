import React from 'react';

import './estructura.css';

import {Link} from 'react-router-dom';

export default function registrarse() {
  return (
    <div id="contenedor" >
    <form class="form" id="formulario">
        
       
        <h1 class="titulo">Registrarse</h1>
        
       
        <input class="cajas" type="text" placeholder="Nombre" required maxlength="30"/>
        <input class="cajas" type="text" placeholder="Apellido(s)" required maxlength="30"/>
        <input class="cajas" type="email" placeholder="Email" required maxlength="30"/>
        <input class="cajas" type="password" placeholder="Password" required maxlength="30"/>
        
        
        <p class="termino1">
          <input type="checkbox"/>&nbsp; Estoy de acuerdo con 
          <a class="termino2" href=""> Terminos y Condiciones
          </a>
          </p>
         
        
        
        <input type="submit" class="btn botonregistro" id="botn" value="REGISTRAR"/>
        
        
        <p class="tengo-cuenta"><Link to="/" class="tengo-cuenta">Ya tengo cuenta</Link></p>
        
    </form>
    </div>
  )
}
