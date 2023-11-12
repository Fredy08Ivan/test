import React, { Component } from "react";
import "./estructura.css";
import { Link } from "react-router-dom";

export default function Mdocente() {
  return (
    <div className="paginaprincipal">
      <nav className="navbar navbar-expand-lg bg-body-tertiary container">
        <div class="container-fluid">
          <a class="navbar-brand">Sistema Integral de Tutorías</a>
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
            <span class="navbar-text">
              Dany Cambrano Arcos
              <button type="button" class="btn btn-outline-secondary">
                Docente
              </button>
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
      <div class="container-fluid"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 mb-4">
            <div class="card">
              <img src="img\gruposymaterias.svg" />
              <div class="card-body">
                <h5 class="card-title">Materias</h5>
                <p class="card-text">
                  Informacion de las materias actuales asignadas.
                </p>
                <div className="text-center">
                <Link to="/verMaterias" class="btn btn-outline-success btn-sm">
                  Ir
                </Link>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 mb-4">
            <div class="card">
              <img src="img\asistencia.svg" />
              <div class="card-body">
                <h5 class="card-title">Asistencia</h5>
                <p class="card-text">
                  Tomar asistencia diaria de los grupos asignados.
                </p>
                <div className="text-center">
                <Link to="/Asistencia" class="btn btn-outline-success btn-sm">
                  Ir
                </Link>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 mb-4">
            <div class="card">
              <img src="img\materia.svg" />
              <div class="card-body">
                <h5 class="card-title">Temas</h5>
                <p class="card-text">
                  Ver Temas de las materias correspondientes.
                </p>
                <div className="text-center">
                <Link to="/verTemas" class="btn btn-outline-success btn-sm">
                  Ir
                </Link>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 mb-4">
            <div class="card">
              <img src="img\grupo.svg" />
              <div class="card-body">
                <h5 class="card-title">Grupos</h5>
                <p class="card-text">
                  Informacion de los grupos actuales asignados.
                </p>
                <div className="text-center">
                <Link to="/verGrupos" class="btn btn-outline-success btn-sm">
                  Ir
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
