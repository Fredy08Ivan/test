import React, { useState, useEffect } from "react";
import "./estructura.css";
import axios from "axios";

export default function Vergrupos() {
  const [grupos, setGrupos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/")
      .then((response) => {
        setGrupos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container-fluid">
      <br />
      <br />
      <br /> <br />
      <center>
        <h2 class="titulodocente">Grupos actuales</h2>
      </center>
      <br />
      <br />
      <br /> <br />
      {grupos.map((grupo) => (
        <table
          key={grupo.id}
          class="table table-bordered border-dark tablasdoc"
        >
          <tbody>
            <tr>
              <th scope="row">Grupo:</th>
              <td class="cuerpoasistencia">{grupo.grupo}</td>
            </tr>
            <tr>
              <th scope="row">Asignatura:</th>
              <td class="cuerpoasistencia">{grupo.asignatura}</td>
            </tr>
            <tr>
              <th scope="row">Semestre:</th>
              <td class="cuerpoasistencia">{grupo.semestre}</td>
            </tr>
            <tr>
              <th scope="row">Carrera:</th>
              <td class="cuerpoasistencia">{grupo.carrera}</td>
            </tr>
            <tr>
              <th scope="row">Turno:</th>
              <td class="cuerpoasistencia">{grupo.turno}</td>
            </tr>
          </tbody>
        </table>
      ))}
      <br /> <br />
      <br />
    </div>
  );
}
