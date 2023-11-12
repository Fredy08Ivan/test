import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import Axios from "../services/axios";

export default function Materias2() {
  const [materia, setMateria] = useState([]);
  const Consultar = async () => {
    const consulta = await Axios.get("/materia/consultar");
    setMateria(consulta.data);
    console.log(consulta.data);
  };

  const Eliminar = async (id) => {
    if (window.confirm("¿Esta seguro de eliminar esta materia?"))
    {
      await Axios.delete(`/materia/eliminar/${id}`);
      console.log("Datos eliminados correctamente");
      toast.promise(Consultar(), {
        loading: "Eliminando materia...",
        success: <b>Eliminando!</b>,
      });
    }
    Consultar();
  };

  useEffect(() => {
    Consultar();
  }, []);

  return (
    <div>
      <div className="container">
        {materia.map((materia, index) => {
          return (
            <div className="col-lg-4 m1">
              <center>
                <div className="card">
                  <h5 className="card-tittle">{materia.nomMater}</h5>
                  <h5 className="card-tittle">{materia.clave}</h5>
                  <h5 className="card-tittle">{materia.credito}</h5>
                  <h5 className="card-tittle">{materia.numTem}</h5>
                  <h5 className="card-tittle">{materia.horaPract}</h5>
                  <h5 className="card-tittle">{materia.horaPract}</h5>
                  <h5 className="card-tittle">{materia.horaTeoric}</h5>
                  <h5 className="card-tittle">{materia.modalidad}</h5>
                  <h5 className="card-tittle">{materia.semanas}</h5>
                  <button
                    className="btn btn-danger"
                    onClick={() => Eliminar(materia._id)}
                  >
                    Eliminar
                  </button>
                </div>
              </center>
            </div>
          );
        })}
      </div>
    </div>
  );
}
