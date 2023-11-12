import React, { Component } from "react";
import "./estructura.css";
import { Link } from "react-router-dom";


import Footer from "../paginas/pieDePagina";

export default function Principal() {
  return (
    <body>
      <center>
        <nav class="navbar navbar-expand-lg bg-body-tertiary container">
          <div class="container-fluid">
            <a class="navbar-brand">
              Sistema Integral de Tutorías
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
              <span class="navbar-text">Fernando Vera Priego &nbsp;
              <button type="button" class="btn btn-outline-primary">Jefe de carrera</button>
              
              </span>
              &nbsp;
              <div
                class="btn-group"
                role="group"
                aria-label="Button group with nested dropdown"
              >
                <div class="btn-group" role="group">
                  <button
                    type="button"
                    class="btn btn-primary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="bi bi-person-fill"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Perfil
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/*  */}
      </center>{" "}
      <br />
      <br />
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
      </center>
    </body>
  );
}
