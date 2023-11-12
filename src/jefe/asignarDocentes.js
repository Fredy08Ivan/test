import React, { useEffect, useState } from "react";
import "../components/estructura.css";
import { Link } from "react-router-dom";
import Axios from "../services/axios"

export default function AsignarDocentes() {

 

  return (
    <div className="container-fluid">
      <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <h3>Registro y Asignación</h3>
      </div>

      <center>
        <section id="gallery">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 mb-4">
                <div class="card">
                  <img src="img\registropersonal.svg" />
                  <div class="card-body">
                    <h5 class="card-title">-----------</h5>
                    <p class="card-text">
                      .......................
                    </p>
                    <Link
                      to=""
                      class="btn btn-outline-success btn-sm"
                    >
                      Ingresar
                    </Link>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="card">
                  <img src="img\docente.svg" />
                  <div class="card-body">
                    <h5 class="card-title">Asignar Materias a docente</h5>
                    <p class="card-text">
                      Visualiza y registra materias a los docentes
                    </p>
                    <Link
                      to="/cargarDocente"
                      class="btn btn-outline-success btn-sm"
                    >
                      Ingresar
                    </Link>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="card">
                  <img src="img\docente-tutor.svg" />
                  <div class="card-body">
                    <h5 class="card-title">Asignación de Tutorados a docente</h5>
                    <p class="card-text">Administrar los tutorados</p>
                    <Link
                      to="/asigTutora"
                      class="btn btn-outline-success btn-sm"
                    >
                      Ingresar
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
      </center>
    </div>
  );
}
