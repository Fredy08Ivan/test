import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import Axios from "../services/axios";

export default function Grupos2() {
  const [grupo, setGrupos] = useState([]);

  const Consultar = async () => {
    const consulta = await Axios.get("/grupo/consultar");
    setGrupos(consulta.data);
    console.log(consulta.data);
  };

  const Eliminar = async (id) => {
    if (window.confirm("¿Desea eliminar este grupo?"))
    {
      await Axios.delete(`/grupo/eliminar/${id}`);
      console.log("Se elimino el grupo");
      toast.promise(Consultar(), {
        loading: "Eliminando grupo...",
        success: <b>Eliminado!</b>,
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
        {grupo.map((grupo, index) => {
          return (
            <div className="col-lg-4 m-1">
              <center>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-tittle">{grupo.nombre}</h5>
                    <h5 className="card-tittle">{grupo.semestre}</h5>
                    <h5 className="card-tittle">{grupo.turno}</h5>
                    <h5 className="card-tittle">{grupo.carrera}</h5>
                    <h5 className="card-tittle">{grupo.imagen}</h5>
                    <button
                      className="btn btn-danger"
                      onClick={() => Eliminar(grupo._id)}
                    ></button>
                  </div>
                </div>
              </center>
            </div>
          );
        })}
      </div>
    </div>
  );
}
