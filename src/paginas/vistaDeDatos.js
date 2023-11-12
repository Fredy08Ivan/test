import React from "react";

import { Link } from "react-router-dom";

import "./vistaDaEstilo.css";

export default function vistaDeDatos() {
  return (
    <body class="paginaprincipal">
   
      <div class="Iam">
        <p>Vistas de</p>
        <b>
          <div class="innerIam">
          Personal
          <br /> 
          Grupos
          <br /> 
          Materias
          <br /> 
          Alumnos
          <br /> 
          Entre otros 
          </div>
        </b>
      </div>
      <br /><br /><br />
  
  
<section id="gallery">
  <div class="container">
    <div class="row">
    <div class="col-lg-4 mb-4">
    <div class="card">
      <img src="img\carrera.svg" />
      <div class="card-body">
        <h5 class="card-title">Carrera</h5>
        <p class="card-text">Inicie los resgistros de los docentes a su carrera.</p>
        <Link to="/vistCarrera" class="btn btn-outline-success btn-sm">Agregar</Link>
        
      </div>
     </div>
    </div>
  <div class="col-lg-4 mb-4">
  <div class="card">
      <img src="img\icono-personal.svg" />
      <div class="card-body">
        <h5 class="card-title">Personal</h5>
        <p class="card-text">Visualize la informacion del personal registrado.</p>
       <Link to="/vcp" class="btn btn-outline-success btn-sm">Agregar</Link>
      </div>
      </div>
    </div>
    <div class="col-lg-4 mb-4">
    <div class="card">
      <img src="img\aulas.svg" />
      <div class="card-body">
        <h5 class="card-title">Aulas</h5>
        <p class="card-text">Visualize la informacion de las aulas registradas.</p>
       <a href="" class="btn btn-outline-success btn-sm">Agregar</a>
      </div>
     </div>
    </div>
  </div>
</div>
</section>

<section id="gallery">
  <div class="container">
    <div class="row">
    <div class="col-lg-4 mb-4">
    <div class="card">
      <img src="img\materia.svg" />
      <div class="card-body">
        <h5 class="card-title">Materias</h5>
        <p class="card-text">Informacion sobre las materias regitradas .</p>
        <a href="" class="btn btn-outline-success btn-sm">Agregar</a>
        
      </div>
     </div>
    </div>
  <div class="col-lg-4 mb-4">
  <div class="card">
      <img src="img\agregaralumno.svg"/>
      <div class="card-body">
        <h5 class="card-title">Alumnos</h5>
        <p class="card-text">Informacion de los alumnos registrados.</p>
       <a href="" class="btn btn-outline-success btn-sm">Agregar</a>
      </div>
      </div>
    </div>
    <div class="col-lg-4 mb-4">
    <div class="card">
      <img src="img\grupo.svg" />
      <div class="card-body">
        <h5 class="card-title">Grupos</h5>
        <p class="card-text">Informacion de los grupos registrados.</p>
       <a href="" class="btn btn-outline-success btn-sm">Agregar</a>
      </div>
     </div>
    </div>
  </div>
</div>
</section>
    </body>
  );
}
