import React, { useState, useEffect } from "react";
// import "../components/estructura.css";
import "../paginas/fomPr.css";
import { Link, useNavigate, useParams } from "react-router-dom";

import { toast } from "react-hot-toast";

import Imagen from "../paginas/agregarImagen";
import Axios from "../services/axios";

 function RegistroDocente() {
  const datos = {
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
    descripcion: "",
    image:""
    
  };
  const [values, setValues] = useState(datos);
  const [carreras, setCarreras] = useState({
    clave:"",
    nombre:"",
    modalidad:""
  });

  const params = useParams();
  const navigate = useNavigate();

  const CambioEstado = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    // console.log(value)
  };
  //console.log(values);

  const consultarCarrera = async () => {
    const consultarCar = await Axios.get(`/carrera/consultarUna/${params.id}`);
    setCarreras(consultarCar.data);
    // console.log(consultarCar.data);
  };

 

  //Metodo para guardar la información
  const save = async () => {
   
    await Axios.post("/personal/guardar", {
      carrera: params.id,
      nombre: values.nombre,
      apellidos: values.apellidos,
      telefono: values.telefono,
      sexo: values.sexo,
      clave: values.clave,
      fechNac: values.fechNac,
      direccion: values.direccion,
      rol: values.rol,
      descripcion: values.descripcion,
      image: values.image
      }).then(() => {
        toast.success('Se guardaro correctamente los datos');
      });
    setValues(datos);
  };

  const unaPersona = async (id) => {
    const buscarUno = await Axios.get("/personal/consultarUno/" + id);
    setValues(buscarUno.data);
  };

  const actDatos = async () => {
    await Axios.put(`/personal/actualizar/${params.id}`,values).then(
      () => {
      toast.promise(actDatos(), {
        loading: "Actualizando...",
        success: <b>Se han actualizado los datos!</b>,
        error: <b>No se pudo guardar</b>,
      });
    });
    navigate("/");
  };

  const send = (e) => {
    e.preventDefault();
    if (values._id === "") {
      save();
    } else {
      actDatos();
    }
  };

  useEffect(() => {
    unaPersona(params.id);
    consultarCarrera();
  }, [params.id]);

  return (
    <div className="container-fluid">
      {" "}
      <br />
      <br />
      <br />
      <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <h2 className="text-center" >
        Registro del personal
      </h2>
      </div>
      <br />
      <br />
      {/* <div class="row mb-3">
        <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
          <button type="button" class="btn btn-outline-dark">Carrera:</button> &nbsp;
          {carreras.nombre} &nbsp;
          <button type="button" class="btn btn-outline-dark">Clave:</button> &nbsp; 
          {carreras.clave}&nbsp;
          <button type="button" class="btn btn-outline-dark">Modalidad:</button> &nbsp;
          {carreras.modalidad}</div>
        </div> */}
      <br />
      <br />
      <div id="container">
        <h1>&bull; Registro del personal &bull;</h1>
        <div class="underline"></div>
        <div class="icon_wrapper">
          <ion-icon name="accessibility"></ion-icon>
        </div>
        <form class="row g-3 needs-validation" onSubmit={send} id="formDatos">
          <div class="name">
            <label for="validationCustom01" class="form-label"></label>
            <input
              type="text"
              class="form-control"
              placeholder="Nombre"
              id="validationCustom01"
              required
              name="nombre"
              value={values.nombre}
              onChange={CambioEstado}
            />
            <div class="valid-feedback">Datos ingresados!</div>
          </div>

          <div class="email">
            <label for="validationCustom02" class="form-label"></label>
            <input
              type="text"
              placeholder="apellido(s)"
              class="form-control"
              id="validationCustom02"
              required
              name="apellidos"
              value={values.apellidos}
              onChange={CambioEstado}
            />
            <div class="valid-feedback">Datos ingresados!</div>
          </div>
          <div class="telephone">
            <label for="validationCustom03" class="form-label">
              {" "}
            </label>
            <input
              type="text"
              placeholder="Telefono"
              class="form-control"
              id="validationCustom03"
              required
              name="telefono"
              value={values.telefono}
              onChange={CambioEstado}
            />
            <div class="invalid-feedback">
              Porfavor ingrese el numero telefonico
            </div>
          </div>
          <div class="subject">
            <label for="validationCustom04" class="form-label">
              {" "}
            </label>

            <select
              placeholder="Subject line"
              id="subject_input"
              required
              name="sexo"
              value={values.sexo}
              onChange={CambioEstado}
            >
              <option disabled selected value="">
                Sexo
              </option>
              <option>Masculino</option>
              <option>Femenino</option>
            </select>
            <div class="invalid-feedback">Porfavor seleccione el sexo</div>
          </div>

          <div class="subject">
            <label for="validationCustom05" class="form-label"></label>
            <input
              type="text"
              placeholder="clave"
              class="form-control"
              id="validationCustom05"
              required
              name="clave"
              value={values.clave}
              onChange={CambioEstado}
            />
            <div class="invalid-feedback">
              Porfavor ingrese la clave del docente
            </div>
          </div>

        

          <div class="subject">
            <label for="validationCustom05" class="form-label"></label>
            <input
              type="date"
              class="form-control"
              placeholder="Fecha de nacimiento"
              id="validationCustom05"
              required
              name="fechNac"
              value={values.fechNac}
              onChange={CambioEstado}
            />
            <div class="invalid-feedback">
              Porfavor ingrese la fecha de nacimiento del docente
            </div>
          </div>

          <div class="subject">
            <label for="validationCustom05" class="form-label"></label>
            <input
              type="text"
              placeholder="direccion"
              class="form-control"
              id="validationCustom05"
              required
              name="direccion"
              value={values.direccion}
              onChange={CambioEstado}
            />
            <div class="invalid-feedback">Ingrese la direccion del docente</div>
          </div>

          <div class="subject">
            <label for="validationCustom05" className="form-label"></label>
            <select
              id="validationCustom05"
              required
              name="rol"
              value={values.rol}
              onChange={CambioEstado}
            >
              <option selected disabled value="">
                Cargo...
              </option>
              <option>Docente</option>
              <option>Docente-Tutor</option>
              <option>Encargado de Tutorias</option>
              <option></option>
            </select>
          </div>

         

          {/*<div class="mb-3">
          <label for="formFile" class="form-label">
            Seleccione un foto de perfil
          </label>
          <input class="form-control" type="file" id="formFile" />
        </div>*/}

          {/*Foto de perfil */}

          <Imagen />

          {/*Finaliza */}

          <div class="message">
            <label for="validationTextarea" class="form-label"></label>
            <textarea
              name="descripcion"
              placeholder="Ingrese una pequeña descripción"
              id="validationTextarea"
              cols="30"
              rows="5"
              required
              value={values.descripcion}
              onChange={CambioEstado}
            ></textarea>
          </div>
          <div class="invalid-feedback">
            Porfavor ingrese una descripcion del docente
          </div>

          <div class="submit text-center" >
            <input type="submit" value={values._id==="" ? "Enviar" : "Actualizar"} id="form_button"/>
            
          </div>
        </form>
      </div>
      <br />
      <div className="col-12 text-center">
        <Link className="txtref" to="/asignarDoc">
          <button class="btn btn-dark">Regresar</button>
        </Link>
      </div>
    </div>
  );
}

export default RegistroDocente;
