import React from "react";
import { Link } from "react-router-dom";
import "../estructura.css";


export default function Encabezado() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg" id="colorBack">
      <a class="navbar-logo" href="#">
      <img src="img/logo.png" className="logoT"/>
    </a>
        <div class="container-fluid">
          <div className="contenedor">
            <Link class="navbar-brand" id="letras" to='/'>
              Tec Ríos..<span className="spaN">&#160;</span>
            </Link>
          </div>   
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" id="colorIcon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="letras"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <Link class="nav-link" id="letras" to="/Vistas">
                  Vistas
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" id="letras" to="/contacto">
                  Contacto
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" id="letras" to="/enConstruccion">
                  Generar Reportes
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
