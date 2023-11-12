import React, { Component } from "react";
import "./estructura.css";

export default function Temas() {
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  console.log(`${month}/${day}/${year}`);
  console.log(`${month}/${day}/${year}`);

  return (
    <div className="container-fluid">
      <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <h3>Temas </h3>
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

      <div className="container text-center">
        <table class="table table-striped table-bordered" WIDTH="500">
          <thead>
            <tr>
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
                <center>T1</center>
              </th>
              <th scope="col" WIDTH="100" HEIGHT="50">
                <center>T2</center>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>19E20359</td>
              <td>Andy Jesus </td>
              <td> Castro Reyes</td>
              <td>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                   
                  </label>
                </div>
              </td>
              <td >
                
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                </div>
                
              </td>
            </tr>
          </tbody>
        </table>

        <br /> <br /> <br />
        <center>
          <button type="button" class="btn btn-primary">
            Enviar
          </button>
        </center>
      </div>
    </div>
  );
}
