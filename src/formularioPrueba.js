import React, { useState, useEffect } from "react";
import Axios from "./services/axios";
import { useNavigate, useParams } from "react-router-dom";

function FormularioPrueba() {
    const variables = {
        _id: "",
        carrera: " ",
        nombre: "",
        apellidos: "",
        telefono: "",
        sexo: "",
        clave: "",
        fechNac: "",
        direccion: "",
        rol: "",
        imagPer: "",
        descripcion: "",
      };
      const [guardarAlumnos, setguardarAlumnos] = useState(variables);

  const [carreras, setCarreras] = useState({
    clave: "",
    nombre: "",
    modalidad: "",
  });

  //variable para comparar el parámetro
  const params = useParams();
  const navigate = useNavigate();

  const obtenerValues = (e) => {
    const { name, value } = e.target;
    setguardarAlumnos({ ...guardarAlumnos, [name]: value });
  };

  console.log(guardarAlumnos);

  const consultarCarrera = async () => {
    const consultarCar = await Axios.get(`/carrera/consultarUna/${params.id}`);
    setCarreras(consultarCar.data);
    // console.log(consultarCar.data);
  };

  const guardarDatos = async () => {
    // const formulario = document.getElementById("formalumno");
    // const formData = new FormData(formulario);

    await Axios.post("/personal/guardar", {
    carrera: params.id,
    nombre: guardarAlumnos.nombre,
    apellidos: guardarAlumnos.apellidos,
    telefono: guardarAlumnos.telefono,
    sexo: guardarAlumnos.sexo,
    clave: guardarAlumnos.clave,
    fechNac: guardarAlumnos.fechNac,
    direccion: guardarAlumnos.direccion,
    rol: guardarAlumnos.rol,
    imagPer: guardarAlumnos.imagPer,
    descripcion: guardarAlumnos.descripcion,
    }).then(() => {
      console.log("Registros guardados exitosamente");
    });
  };

  const oneAlumno = async (id) => {
    const buscarAlumno = await Axios.get("/personal/consultarUno/" + id);
    setguardarAlumnos(buscarAlumno.data);
  };

  const updateAlumno = async () => {
    await Axios.put(`/personal/actualizar/${params.id}`, guardarAlumnos).then(
      () => {
        console.log("Datos actualizados correctamente");
      }
    );

    navigate("/");
  };

  const Enviar = (e) => {
    e.preventDefault();

    if (guardarAlumnos._id === "") {
      guardarDatos();
    } else {
      updateAlumno();
    }
  };

  useEffect(() => {
    oneAlumno(params.id);
    consultarCarrera();
  }, [params.id]);

  return (
    <div>
      <form onSubmit={Enviar} id="formalumno">
        <div class="row mb-3">
          <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
            <button type="button" class="btn btn-outline-dark">
              Carrera:
            </button>{" "}
            &nbsp;
            {carreras.nombre} &nbsp;
            <button type="button" class="btn btn-outline-dark">
              Clave:
            </button>{" "}
            &nbsp;
            {carreras.clave}&nbsp;
            <button type="button" class="btn btn-outline-dark">
              Modalidad:
            </button>{" "}
            &nbsp;
            {carreras.modalidad}
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Matricula</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="clave"
              value={guardarAlumnos.clave}
              onChange={obtenerValues}
            />
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Nombre</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="nombre"
              value={guardarAlumnos.nombre}
              onChange={obtenerValues}
            />
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Sexo</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="sexo"
              value={guardarAlumnos.sexo}
              onChange={obtenerValues}
            />
          </div>
        </div>

        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Dirección</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="direccion"
              value={guardarAlumnos.direccion}
              onChange={obtenerValues}
            />
          </div>
        </div>

        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Imagen</label>
          <div class="col-sm-10">
            <input
              type="file"
              class="form-control"
              name="image"
              value={guardarAlumnos.image}
              onChange={obtenerValues}
            />
          </div>
        </div>

        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Edad</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="descripcion"
              value={guardarAlumnos.descripcion}
              onChange={obtenerValues}
            />
          </div>
        </div>

        {/* <div class="row mb-3">
          <div class="input-group">
            <input
              type="file"
              class="form-control"
              id="inputGroupFile04"
              aria-describedby="inputGroupFileAddon04"
              aria-label="Upload"
              name="image"
              value={guardarAlumnos.image}
              onChange={obtenerValues}
            />
          </div>
        </div> */}

        <div class="row mb-3">
          <input 
          className="form-control"
          name="fechNac"
          value={guardarAlumnos.fechNac}
          onChange={obtenerValues}
          type="datetime-local"/>
        </div>


        <button type="submit" class="btn btn-primary">
          {guardarAlumnos._id === "" ? "Guardar" : "Actualizar"}
        </button>
      </form>
    </div>
  );
}

export default FormularioPrueba;
