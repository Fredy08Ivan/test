import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import Axios from "../services/axios";

export default function Alumnos2() {
  const [alumno, setAlumno] = useState([]);
  const Consultar = async () =>{
    const consulta = await Axios.get("/alumno/consultar");
    setAlumno(consulta.data);
    console.log(consulta.data);
  };

  const Eliminar = async (id) =>{
    if(window.confirm("Esta seguro de eliminar")){
      await Axios.delete(`/alumno/eliminar/${id}`);
      console.log("Dato eliminados correctamente");
      toast.promise(Consultar(),{
        loading: "Eliminando Alumno... ",
        success: <b>Eliminando!</b>
      });
    }

    Consultar();
  };


  useEffect(()=>{
    Consultar();
  },[]);

  return (
    <div>
      <div className="container">
        {alumno.map((alumnos, index) => {
          return (
            <div className="col-lg-4 m-1">
              <center>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-tittle">{alumnos.matricula}</h5>
                    <h5 className="card-tittle">{alumnos.nombre}</h5>
                    <h5 className="card-tittle">{alumnos.apellidos}</h5>
                    <h5 className="card-tittle">{alumnos.genero}</h5>
                    <h5 className="card-tittle">{alumnos.nacimiento}</h5>
                    <h5 className="card-tittle">{alumnos.telefono}</h5>
                    <h5 className="card-tittle">{alumnos.direccion}</h5>
                    <h5 className="card-tittle">{alumnos.grupo}</h5>
                    <h5 className="card-tittle">{alumnos.image}</h5>
                    <button
                    type="button"
                      className="btn btn-danger"
                      onClick={() => Eliminar(alumnos._id)}
                    >
                      Eliminar
                    </button>
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
