import React, { useState } from "react";
import { Link } from "react-router-dom";

import Axios from "../services/axios";
import { toast } from "react-hot-toast";

export default function AgregarAulas() {
  const datos = {
    nombre: "",
    capacidad: "",
    edificio: "",
    planta: "",
  };

  const [values, setValues] = useState(datos);

  const CambioEstado = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const save = async () => {
    Axios.post("/aula/guardar", {
      nombre: values.nombre,
      capacidad: values.capacidad,
      edificio: values.edificio,
      planta: values.planta,
    }).then(() => {
      toast.success("Successfully toasted!");
    });
    setValues(datos);
  };

  const send = (e) => {
    e.preventDefault();
    save();
  };

  return (
    <div className="container-fluid">
      <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <h3>Ingresar datos de las Aulas</h3>
      </div>

      <div>
        {/* <h1>&bull; Registro de aula &bull;</h1>
        <div class="underline"></div>
        <div class="icon_wrapper">
          <ion-icon name="business"></ion-icon>
        </div> */}
        <form
          className="row needs-validation text-center"
          novalidate
          onSubmit={send}
        >
          <div class="container text-center">
            <div class="row g-3 align-items-center justify-content-start">
              <div class="col-4">
                <div class="row g-3 align-items-center">
                  <div class="col-auto">
                    <label for="inputEmail6" class="col-form-label">
                      Nombre:
                    </label>
                  </div>
                  <div class="col-auto">
                    <input type="text" id="inputText6" class="form-control" />
                  </div>
                </div>
              </div>

              <div class="col-4">
                <div class="row g-3 align-items-center">
                  <div class="col-auto">
                    <label for="inputPassword6" class="col-form-label">
                      Edificio
                    </label>
                  </div>
                  <div class="col-auto">
                    <input type="text" id="inputText6" class="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div class="container text-center">
            <div class="row justify-content-start">
              <div class="col-4">
                <div class="row g-3 align-items-center">
                  <div class="col-auto">
                    <label for="inputPassword6" class="col-form-label">
                      Capacidad
                    </label>
                  </div>
                  <div class="col-auto">
                    <input type="text" id="inputText6" class="form-control" />
                  </div>
                </div>
              </div>

              <div class="col-4">
                <div class="row g-3 align-items-center">
                  <div class="col-auto">
                    <label for="inputPassword6" class="col-form-label">
                      Planta
                    </label>
                  </div>
                  <div class="col-auto">
                    <input type="text" id="inputText6" class="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="submit">
            <input type="submit" value="Guardar" id="form_button" />
          </div>
        </form>

        <table class="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">N°</th>
              <th scope="col">Nombre</th>
              <th scope="col">Edificio</th>
              <th scope="col">Capacidad</th>
              <th scope="col">Planta</th>
              <th scope="col">Eliminar</th>
              <th scope="col">Editar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td></td>
              <td><button className="btn btn-danger"><i class="bi bi-trash3"></i></button></td>
              <td><button className="btn btn-secondary"><i class="bi bi-pencil"></i></button></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <div className="col-12 text-center">
        <Link className="txtref" to="/principal">
          <button className="btn btn-dark">Regresar</button>
        </Link>
      </div>
    </div>
  );
}
