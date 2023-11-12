import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

import Axios from "../../../services/axios";

function VistaCarreraPrincipal() {
  const [carrera, setCarrera] = useState([]);

  const navigate = useNavigate();

  const buscarCarrera = async () => {
    const res = await Axios.get("/carrera/consultar");
    setCarrera(res.data);
  };

  useEffect(() => {
    buscarCarrera();
  }, []);

  return (
    <div className="container">
      <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <p class="fs-1 text-center">Vista de carreras</p>
      </div>

      <div class="row row-cols-1 row-cols-md-2 g-4">
        {carrera.map((carreras, index) => (
          <div class="col">
            <div class="card shadow-lg p-3 mb-5 bg-body-tertiary rounded">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Clave: {carreras.clave}</h5>
                <p class="card-text">Nombre: {carreras.nombre}</p>
                <p class="card-text">Modalidad: {carreras.modalidad}</p>
              </div>
              <div class="card-footer">
                <small class="text-body-secondary ">
                  <button className="btn btn-primary " onClick={() => navigate(`/vistaPersonal/${carreras._id}`)}>
                    Ver Personal
                  </button>
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VistaCarreraPrincipal;
