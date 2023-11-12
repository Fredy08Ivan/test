import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/estructura.css";

import Imagen from "../paginas/agregarImagen";

import Axios from "../services/axios";
import { toast } from "react-hot-toast";

export default function AgregarAlumnos() {
  const datos = {
    matricula: "",
    nombre: "",
    apellidos: "",
    genero: "",
    nacimiento: "",
    telefono: "",
    direccion: "",
    grupo: "",
    image: "",
  };

  const [values, setValues] = useState(datos);

  const CambioEstado = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const Guardar = async () => {
    Axios.post("/alumno/guardar", {
      matricula: values.matricula,
      nombre: values.nombre,
      apellidos: values.apellidos,
      genero: values.genero,
      nacimiento: values.nacimiento,
      telefono: values.telefono,
      direccion: values.direccion,
      grupo: values.grupo,
      image: values.image,
    }).then(() => {
      console.log("Se gurdaron los datos con exito");
      toast.success("Se han guardado los datos con exito");
    });
    setValues(datos);
  };

  const Enviar = (e) => {
    e.preventDefault();
    Guardar();
  };

  return (
    <div className="container-fluid">
      <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <h3> Agregar Alumnos</h3>
      </div>

      <div id="container">
        <h1>&bull; Agregar Alumnos &bull;</h1>
        <div class="underline"></div>
        <div class="icon_wrapper">
          <ion-icon name="person-add"></ion-icon>
        </div>
        <form onSubmit={Enviar}>
          <div class="name">
            <label for="full_name_id" class="form-label"></label>
            <input
              type="text"
              class="form-control"
              placeholder="Nombre"
              id="full_name_id"
              required
              name="nombre"
              value={values.nombre}
              onChange={CambioEstado}
            />
          </div>
          <div class="email">
            <label for="validationCustom01" class="form-label"></label>
            <input
              type="text"
              class="form-control"
              placeholder="Matricula"
              id="validationCustom01"
              name="matricula"
              required
              value={values.matricula}
              onChange={CambioEstado}
            />
          </div>
          <div class="telephone">
            <label for="full_name_id" class="form-label"></label>
            <input
              type="text"
              class="form-control"
              placeholder="Apellido(s)"
              id="full_lastname_id"
              required
              name="apellidos"
              value={values.apellidos}
              onChange={CambioEstado}
            />
          </div>

          <div class="subject">
            <label for="sexo_id" class="form-label"></label>
            <select
              placeholder="Subject line"
              id="sexo_id"
              required
              name="genero"
              value={values.genero}
              onChange={CambioEstado}
            >
              <option selected value="">
                Sexo
              </option>
              <option>Hombre</option>
              <option>Mujer</option>
            </select>
            <div class="invalid-feedback">Ingrese el sexo</div>
          </div>

          <div class="telephone">
            <label for="fechN_id" class="form-label"></label>
            <input
              type="text"
              class="form-control"
              placeholder="Fecha de nacimiento"
              id="fechaN_id"
              required
              name="nacimiento"
              value={values.nacimiento}
              onChange={CambioEstado}
            />
            <div class="invalid-feedback">Ingrese la fecha</div>
          </div>

          <div class="telephone">
            <label for="full_name_id" class="form-label"></label>
            <input
              type="text"
              class="form-control"
              placeholder="Numero telefonico"
              id="numeroTel_id"
              required
              name="telefono"
              value={values.telefono}
              onChange={CambioEstado}
            />
            <div class="invalid-feedback">Ingrese el numero telefonico</div>
          </div>

          <div class="telephone">
            <label for="full_name_id" class="form-label"></label>
            <input
              type="text"
              class="form-control"
              placeholder="Dirección"
              id="validationCustom05"
              required
              name="direccion"
              value={values.direccion}
              onChange={CambioEstado}
            />
            <div class="invalid-feedback">Ingrese la direccion del docente</div>
          </div>

          <div class="subject">
            <label for="grupo_id" class="form-label"></label>
            <select
              placeholder="Subject line"
              id="grupo_id"
              required
              name="grupo"
              value={values.grupo}
              onChange={CambioEstado}
            >
              <option selected value="">
                Seleccione el grupo
              </option>
              <option value="G2">Grupo 2</option>
              <option value="G3">Grupo 3</option>
              <option value="G4">Grupo 4</option>
              <option value="G5">Grupo 5</option>
            </select>
            <div class="invalid-feedback">Ingrese una opción</div>
          </div>

          <div className="">
            <label for="exampleFormControlFile1">Inserte su imagen</label>
            <br></br>
            <input
              type="file"
              name="image"
              className="form-control-file"
              id="exampleFormControlFile1"
              required
              value={values.image}
              onChange={CambioEstado}
            />
            <div class="invalid-feedback">Ingrese</div>
          </div>
          <br></br>

          <div class="submit text-center">
            <input type="submit" value="Guardar" id="form_button" />
          </div>
        </form>
      </div>

      <br />
      <div class="form-group text-center">
        <Link className="txtref" to="/principal">
          <button type="submit" className="btn btn-dark">
            Regresar
          </button>
        </Link>
      </div>
    </div>
  );
}
