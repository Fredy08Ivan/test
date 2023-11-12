import React, { useState } from "react";

import { Link } from "react-router-dom";
import Axios from "axios";

export default function AgregarPeriodo() {
  const datos = {
    fechInic: "",
    fechFin: "",
  };

  const [startDate, setStartDate] = useState(new Date());
  const [values, setValues] = useState(datos);

  const CambioEstado = (e) => {
    const { name, values } = e.target;
    setValues({ ...values, [name]: values });
    setStartDate(Date());
  };
  console.log(values);

  const save = async () => {
    Axios.post("/periodo/guardar", {
      fechInic: values.fechInic,
      fechFin: values.fechFin,
    }).then(() => {
      console.log();
    });
  };

  const send = (e) => {
    e.preventDefault();
    save();
  };

  return (
    <div className="container-fluid">
      <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
          <h3>Periodos</h3>
        </div>
    
      {/* Tabla para ingresar las fechas del periodo */}
      <table className="table container">
        <thead>
          <tr>
            
            <th scope="col">Fecha de inicio</th>
            <th scope="col">Fecha de finalización</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
           
            <td>
              <input type="date" id="start" name="" min="" max="" />
            </td>
            <td>
              <input type="date" id="start" name="" min="" max="" />
            </td>
            <td>
              <button className="btn btn-success">Guardar</button>
            </td>
          </tr>
        </tbody>
      </table>
      {/* Tabla para ver los periodos agregados */}
      <br /> <br /> <br /> <br />

      <table class="table  table-bordered container">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Periodo</th>
            <th scope="col">Acciones</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Periodo 202002</td>
            <td><button className="btn btn-danger"><i class="bi bi-trash"></i></button> <button className="btn btn-primary"><i class="bi bi-pencil"></i></button></td>
          
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Perioro 02002</td>
            <td>Thornton</td>
            
          </tr>
          <tr>
            <th scope="row">3</th>
            <td >Larry the Bird</td>
            <td >Larry the Bird</td>
          </tr>
        </tbody>
      </table>


      <div className="text-center">
        <Link to="/principal">
          <button className="btn btn-dark" id="margenBtn">
            Regresar
          </button>
        </Link>
      </div>
    </div>
  );
}
