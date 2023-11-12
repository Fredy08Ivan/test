import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./estructura.css";

export default function VerTemas() {
  return (
    <div className="container-fluid">
      <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <h3>Ver temas de materias</h3>
      </div>
      <div className="row">
        <div className="col-6 col-md-3">
          <div class="card">
            <img src="img/funprog.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">1A-ISC-Fundamentos de programación</h5>
              <Link to="/temas" class="btn btn-primary">
              Ver los temas
              </Link>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div class="card">
            <img src="img/progmov.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">9A-ISC-Programación móvil</h5>
              <Link to="/temas" class="btn btn-primary">
              Ver los temas
              </Link>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div class="card">
            <img src="img/ihc.jpeg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">7A-ISCSA-IHC</h5>
              <Link to="/temas" class="btn btn-primary">
              Ver los temas
              </Link>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}
