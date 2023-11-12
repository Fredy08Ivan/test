import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Axios from "../services/axios";

export default function Vermaterias() {
  const datos ={
    id:"",
    clave:"",
    nombre:"",
    tipo:"",
    personal:""
  }
  const params = useParams();
  const [values, setValues] = useState();


  const [mtp, setMtp] = useState(datos);
  const [personas, setPeronsas] = useState({
    nombre:"",
    clave:""
  });

  const[materias, setMaterias] = useState([]);

  const onChange = (e) =>{
    const {name, value} = e.target;
    setValues({ ...values, [name]: value });
  }

  const listarMaterias = async () =>{
    const res = await Axios.get(`/materia/consultar`);
    setMaterias(res.data);
    console.log(res.data)
  }

  useEffect(() => {
    listarMaterias();
  }, []);


   

  return (
    <div className="container-fluid">
      <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <h3>Materias del docente</h3>
      </div>
      <br />

      <div className="container">
        <div className="row ">
        {materias.map((materias, index)=>(
          <div className="col-6 col-md-4">
            <div class="card">
              <div class="row">
              <div>
                <div class="col">
                  <img
                    src="img/funprog.jpg"
                    class="img-fluid rounded-start"
                    alt="..."
                  width='200px'
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <div class="row">
                      
                        <div class="col">
                        <h5 class="card-title">
                         {materias.nomMater} &nbsp;
                        </h5>
                      </div>
                      
                      <div class="col-auto ">
                        <a
                          class=""
                          type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasBottom"
                          aria-controls="offcanvasBottom"
                        >
                          <i class="bi bi-border-width"></i>
                        </a>

                        <div
                          class="offcanvas offcanvas-bottom"
                          tabindex="-1"
                          id="offcanvasBottom"
                          aria-labelledby="offcanvasBottomLabel"
                        >
                          <div class="offcanvas-header">
                            <h5
                              class="offcanvas-title"
                              id="offcanvasBottomLabel"
                            >
                              Acciones
                            </h5>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="offcanvas"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="offcanvas-body small">
                            <p class="h4"><i class="bi bi-plus"></i> &nbsp; Agrega</p>
                            <p class="h4"><i class="bi bi-person-check"></i> &nbsp; Asistencia</p>
                            <p class="h4"><i class="bi bi-body-text"></i> &nbsp; Archivo</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>

                    <p class="card-text col-auto">
                      <small class="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
          
          




        </div>
      </div>
    </div>
  );
}
