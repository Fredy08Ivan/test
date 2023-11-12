import React from "react";

import { Link } from "react-router-dom";

export default function asignarTutor() {
  return (
    <div>
      <div class="row mb-3">
        <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
          <h3>Asignación de tutorados</h3>
        </div>

        <form className="row g-3 container">
          <div className="col-auto">
            <select className="form-select" aria-label="Default select example">
              <option selected>Periodo</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-auto">
            <select className="form-select" aria-label="Default select example">
              <option selected>Generación</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-auto">
            <select className="form-select" aria-label="Default select example">
              <option selected>Docente</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-auto">
          <Link to="/actualiTutor">
            <button type="button" class="btn btn-outline-info">
              Ver tabla de tutorados asignados
            </button>
            </Link>
          </div>
          <br /> <br />
          <br /> <br />
          <div className="container">
            <h3>Lista de estudiantes</h3>
            <table class="table table-bordered table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">Matricula</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Asignar</th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                <tr>
                  <td>20E20235</td>
                  <td>Dany Cambrano Arcos</td>
                  <td>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>20E20235</td>
                  <td>Jorge Magaña Govea</td>
                  <td>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                  <td>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br /> <br />
          <br /> <br />
          <center>
            <div class="container">
              <button type="submit" className="btn btn-primary mb-3">
                Asignar
              </button>
            </div>
          </center>
        </form>
      </div>
    </div>
  );
}
