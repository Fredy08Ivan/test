import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import Axios from "../services/axios";

export default function Aulas2() {
  const [aulas, setAulas] = useState([]);

  const Consultar = async () => {
    const consulta = await Axios.get("/aula/consultar");
    setAulas(consulta.data);
    console.log(consulta.data);
  };

  const Eliminar = async (id) => {
    if (window.confirm("Se eliminara este dato, ¿Esta seguro?"))
    {
      await Axios.delete(`/aula/eliminar/${id}`);
      console.log("Datos eliminados correctamente");
      toast.promise(Consultar(), {
        loading: "Eliminando Aula...",
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
        {aulas.map((aulas, index) => {
          return (
            <div className="col-lg-4 m-1">
              <center>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-tittle">{aulas.nombre}</h5>
                    <h5 className="card-tittle">{aulas.capacidad}</h5>
                    <h5 className="card-tittle">{aulas.edificio}</h5>
                    <h5 className="card-tittle">{aulas.planta}</h5>
                    <button
                      type="buttton"
                      className="btn btn-danger"
                      onClick={() => Eliminar(aulas._id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </center>
            </div>
          )
        })}
      </div>
    </div>
  );
}
