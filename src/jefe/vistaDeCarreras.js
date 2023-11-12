import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

import Axios from "../services/axios";

function VistaDeGrupos() {
  const [carrera, setCarrera] = useState([]);

  const navigate = useNavigate();

  const buscarCarrera = async () => {
    const res = await Axios.get("/carrera/consultar");
    setCarrera(res.data);
  };

  const eliminarCarrera = async (id) => {
    if (window.confirm("Esta seguro de eliminar")) {
      await Axios.delete(`/carrera/eliminar/${id}`);
      console.log("Datos eliminados correctamente");
      toast.promise(buscarCarrera(), {
        loading: "Eliminando Carrera...",
        success: <b>Eliminado!</b>,
      });
    }
    buscarCarrera();
  };

  // const eliminarCarrera = async (id) => {
  //     const res = await Axios.delete(`/carrera/eliminar/${id}`);
  //     console.log(res.data);
  //   };

  useEffect(() => {
    buscarCarrera();
  }, []);

  return (
    <div className="container">
       <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <p class="fs-1 text-center">Vista de carreras</p>
      </div>
      
      <div className="row">
        {carrera.map((carreras, index) => (
          <div className="col s12 m6 13" key={carreras._id}>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Clave: {carreras.clave}</h5>
                <p class="card-text"></p>
                <ul class="list-group list-group-flush">
                  <li className="list-group-item">
                    <button
                      class="btn btn-outline-primary"
                      type="button"
                      id="button-addon1"
                    >
                      Nombre:{" "}
                    </button>{" "}
                    {carreras.nombre}
                  </li>
                  <li class="list-group-item">
                    <button
                      class="btn btn-outline-danger"
                      type="button"
                      id="button-addon1"
                    >
                      Modalidad:{" "}
                    </button>{" "}
                    {carreras.modalidad}
                  </li>
                </ul>
              </div>
              <div class="card-footer bg-transparent border-success text-center">
                <button
                  class="btn btn-primary"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasBottom"
                  aria-controls="offcanvasBottom"
                >
                  Ver mas
                </button>
                &nbsp;
              </div>

              <button
                    type="button"
                    className="btn btn-dark"
                    name="action"
                    onClick={() => navigate(`/registroPersonal/${carreras._id}`)}
                    
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-pen"
                      viewBox="0 0 16 16"
                    >
                      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                    </svg>
                    &nbsp;
                    Agregar personal
                  </button>
              <div
                class="offcanvas offcanvas-bottom"
                tabindex="-1"
                id="offcanvasBottom"
                aria-labelledby="offcanvasBottomLabel"
              >
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasBottomLabel">
                    Opciones
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="offcanvas-body small">
                  <button
                    type="button"
                    className="btn btn-danger"
                    name="action"
                    onClick={() => eliminarCarrera(carreras._id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                    &nbsp; Eliminar
                  </button>

                  &nbsp;

                  
                  <button
                    type="button"
                    className="btn btn-warning"
                    name="action"
                    onClick={()=>navigate(`/aggCarrera/${carreras._id}`)}
                    
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-pen"
                      viewBox="0 0 16 16"
                    >
                      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                    </svg>
                    &nbsp;
                    Actualizar datos
                  </button>

                  &nbsp;

                  <button
                    type="button"
                    className="btn btn-dark"
                    name="action"
                    onClick={() => navigate(`/prueba/${carreras._id}`)}
                    
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-pen"
                      viewBox="0 0 16 16"
                    >
                      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                    </svg>
                    &nbsp;
                    Agregar personal
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VistaDeGrupos;