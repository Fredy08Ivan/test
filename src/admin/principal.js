import React from 'react'
import "../components/estructura.css"
import { Link } from "react-router-dom";

export default function Principal() {
  return (
    <div>
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
              <span class="navbar-text">Dany Cambrano Arcos   &nbsp;
              <button type="button" class="btn btn-outline-primary">Administrador</button>
              
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
                  <br />
                  <center>
                    {" "}
                    <img src="img\icono-personal.svg" />
                  </center>
                  <div class="card-body">
                    <h5 class="card-title">Personal</h5>
                    <p class="card-text">
                      Ingrese para poder asignar o visualizar el personal
                      correspondiente.
                    </p>
                    <Link
                      to="/vistaPersonal"
                      class="btn btn-outline-success btn-sm"
                    >
                      Registrar
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 mb-4">
                <div class="card">
                  <br />
                  <center>
                    <img
                      src="img\asignar-reportes.svg"
                      width="170"
                      height="156"
                    />
                  </center>
                  <div class="card-body">
                    <h5 class="card-title">Agregar Periodos</h5>
                    <p class="card-text">
                      Puede asignar los periodos actuales o bien visualizar los
                      anteriores.
                    </p>
                    <Link to="/registroPeriodos" class="btn btn-outline-success btn-sm">
                    Registrar
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 mb-4">
                <div class="card">
                  <br />
                  <center>
                    <img src="img\aulas.svg" />
                  </center>
                  <div class="card-body">
                    <h5 class="card-title">Agregar Aulas</h5>
                    <p class="card-text">
                      agregar las aulas correspondientes a los grupos actuales.
                    </p>
                    <Link
                      to="/registroAulas"
                      class="btn btn-outline-success btn-sm"
                    >
                      Registrar
                    </Link>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="card">
                  <br />
                  <center>
                    <img src="img\carrera.svg" />
                  </center>
                  <div class="card-body">
                    <h5 class="card-title">Carrera</h5>
                    <p class="card-text">
                      Ingrese para registrar la carrera correspondiente.
                    </p>
                    <Link
                      to="/registroCarrera"
                      class="btn btn-outline-success btn-sm"
                    >
                      Registrar
                    </Link>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="card">
                  <br />
                  <center>
                    <img src="img\materia.svg" />
                  </center>
                  <div class="card-body">
                    <h5 class="card-title">Agregar Materias</h5>
                    <p class="card-text">
                      Agregar o modificar datos de las materias
                      correspondientes.
                    </p>
                    <Link
                     to="/registroMaterias"
                      class="btn btn-outline-success btn-sm"
                    >
                      Registrar
                    </Link>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="card">
                  <br />
                  <center>
                    <img src="img\grupo.svg" />
                  </center>
                  <div class="card-body">
                    <h5 class="card-title">Agregar grupos</h5>
                    <p class="card-text">
                      Agregar los grupos correspondientes a los semestres.
                    </p>
                    <Link
                      to="/registroGrupo"
                      class="btn btn-outline-success btn-sm"
                    >
                      Registrar
                    </Link>
                  </div>
                </div>
              </div>
              <center>
                <div class="col-lg-4 mb-4">
                  <div class="card">
                    <center>
                      <img src="img\agregaralumno.svg" />
                    </center>
                    <div class="card-body">
                      <h5 class="card-title">Agregar Alumnos</h5>
                      <p class="card-text">
                        Ingrese la informacion correspondiente a los alumnos.
                      </p>
                      <Link
                       to="/registroAlumno"
                        class="btn btn-outline-success btn-sm"
                      >
                        Registrar
                      </Link>
                    </div>
                  </div>
                </div>
              </center>
            </div>
          </div>
        </section>
      </center>
    </body>
    </div>
  )
}
