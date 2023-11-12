import React from "react";
import { Link } from "react";
import "../estructura.css";


function GeneraReporte() {

  return (
    <div className="container-fluid">
      <h2 className="text-center">Generar Reportes</h2>
      <br />
      <br />
      <div className="lateral">
        <header>
          <h3>Usuario</h3>
        </header>
        <ul className="menuVert">
          <li>
            <h5>
              <a href="../reportes/infoTutoria.js">Información de Tutorias</a>
            </h5>
          </li>
          <li>
            <h5>Graficos</h5>
          </li>
          <li>
            <h5>Control de maestros</h5>
          </li>
          <li>
            <h5>Volver</h5>
          </li>
        </ul>
      </div>
      <div className="principal">Informacion relacionada</div>


    </div>
  );
}

export default GeneraReporte;
