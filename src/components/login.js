import React, { useState } from "react";
import "./estructura.css";

import { Link } from "react-router-dom";

export default function Login() {
  const datoForm = {
    username: "",
    password: "",
  };

  const [values, setValues] = useState(datoForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div id="contenedor">
      <div id="contenedorcentrado">
        <div id="login" >
          <form id="loginform">
            <label for="usuario">Usuario</label>
            <input
              id="usuario"
              type="text"
              placeholder="Usuario"
              required
              name="username"
              onChange={handleChange}
            />

            <label for="password">Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="Contraseña"
              required
              name="password"
              onChange={handleChange}
            />

            <button type="submit" title="Ingresar" name="Ingresar">
              Login
            </button>
          </form>
        </div>
        <div id="derecho">
          <div class="titulo">Bienvenido</div>
          <hr />
          <div class="pie-form">
            <a href="#">¿Perdiste tu contraseña?</a>
            <Link to="/registrate">¿No tienes Cuenta? Registrate</Link>
            <hr />
            <a href="#">« Volver</a>
          </div>
        </div>
      </div>
    </div>
  );
}



