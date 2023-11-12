import React, { useState, useEffect } from "react";
import "./estructura.css";
import toast, { Toaster } from "react-hot-toast";

import Loading from "../components/layouts/Loading";

export default function Asistencia() {
  const [docente, setDocente] = useState("");
  const [asignatura, setAsignatura] = useState("");
  const [carrera, setCarrera] = useState("");
  const [semestre, setSemestre] = useState("");
  const [grupo, setGrupo] = useState("");
  const [alumnos, setAlumnos] = useState([]);

  const notify = () => toast.success("Comentario agregado");
  const guardar = () => toast.success("Asistencia guardada");

  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((response) => response.json())
      .then((data) => {
        setDocente(data.docente);
        setAsignatura(data.asignatura);
        setCarrera(data.carrera);
        setSemestre(data.semestre);
        setGrupo(data.grupo);
        setAlumnos(data.alumnos);
      });
  }, []);

  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  console.log(`${month}/${day}/${year}`);
  console.log(`${month}/${day}/${year}`);

  const [loading, setLoading] = useState(true);

  // Definimos un tiempo el cual se mostrara y que se pase del estado verdadero a falso
  setTimeout(() => {
    setLoading(false);
  }, 500);

  if (loading) {
    return (
      // Aqui se manda a llamar el componente que se creo e importo se puede visualiza en la linea 9
      <Loading />
    );
    // Dentro del else si la funcion deja de ser vedadero mostrara el contenido
  } else {
    return (
      <div className="container-fluid">
        <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
          <h3>Materias del docente </h3>
        </div>
        <div className="container">
          <div class="shadow-sm p-3 mb-5 bg-body-tertiary rounded">
            <h5>Ingenieria en Sistemas</h5>
            <h5>
              Materia: Fundamentos de programación{" "}
              <div class="d-inline p-2 ">&nbsp; Grupo: 1A</div>
              <div class="d-inline p-2">&nbsp; Turno: Matutino</div>
            </h5>
            <div className="text-center">
              <h4>
                {" "}
                {day}/{month}/{year}
              </h4>
            </div>
          </div>
        </div>
        <br /> <br />
        
        <div className="container text-center"> 
        <table class="table table-striped table-bordered" WIDTH="500">
          <thead>
            <tr>
              <th scope="col" WIDTH="60" HEIGHT="50">
                <center>No.</center>
              </th>
              <th scope="col" WIDTH="200" HEIGHT="50">
                <center>Matricula</center>
              </th>
              <th scope="col" WIDTH="350" HEIGHT="50">
                <center>Nombre</center>
              </th>
              <th scope="col" WIDTH="350" HEIGHT="50">
                <center>Apellidos</center>
              </th>
              <th scope="col" WIDTH="100" HEIGHT="50">
                <center>Asistencia</center>
              </th>
              <th scope="col" WIDTH="100" HEIGHT="50">
                <center>Comentarios</center>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <center>1</center>
              </td>
              <td>19E20359</td>
              <td>Andy Jesus </td>
              <td> Castro Reyes</td>
              <td>
              
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      checked
                    />
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckChecked"
                    >
                     
                    </label>
                  </div>
                 
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  data-bs-whatever="@mdo"
                >
                  <i class="bi bi-plus"></i>
                </button>
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h4
                          class="modal-title fs-5"
                          className="titulocomentarios"
                          id="exampleModalLabel"
                        >
                          Agregar comentario
                        </h4>
                        <center>
                          {" "}
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </center>
                      </div>
                      <div class="modal-body">
                        <form>
                          <div class="mb-3">
                            <label
                              for="recipient-name"
                              className="titulocomentarios"
                            >
                              Motivo:
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="recipient-name"
                            />
                          </div>
                          <div class="mb-3">
                            <label
                              for="message-text"
                              className="titulocomentarios"
                            >
                              Comentario:
                            </label>
                            <textarea
                              class="form-control"
                              id="message-text"
                            ></textarea>
                          </div>
                        </form>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Cerrar
                        </button>
                        <button
                          type="button"
                          class="btn btn-primary"
                          data-bs-dismiss="modal"
                          onClick={notify}
                        >
                          Agregar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
        <br /> <br /> <br />
        <center>
          <button type="button" class="btn btn-success" onClick={guardar}>
            Guardar Asistencia
          </button>
        </center>{" "}
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      </div>
    );
  }
}
