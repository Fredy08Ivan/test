import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import Axios from "../services/axios";
import { toast } from "react-hot-toast";

export default function Materias() {
  const datos = {
    _id:"",
    nomMater: "",
    clave: "",
    creditos: "",
    numTem: "",
    horaPract: "",
    horaTeoric: "",
    tipoMateria: "",
    semestre: "",
  };

  const params = useParams();
  const navigate = useNavigate();

  const [values, setValues] = useState(datos);
  const [materia, setMateria] = useState([]);

  const CambioEstado = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(value);
  };

  const save = async () => {
    Axios.post("/materia/guardar", {
      nomMater: values.nomMater,
      clave: values.clave,
      creditos: values.creditos,
      numTem: values.numTem,
      horaPract: values.horaPract,
      horaTeoric: values.horaTeoric,
      tipoMateria: values.tipoMateria,
      semestre: values.semestre,
    }).then(() => {
      // Aqui va el react toastify
      toast.success("Se agrego la materia con exito");
    });
    setValues(datos);
    navigate('/registroMaterias');
  };

  const consultar = async () => {
    const consulta = await Axios.get("/materia/consultar");
    setMateria(consulta.data);
    console.log(consulta.data);
    
  };

  const consultarUna = async (id) =>{
    const buscarUna = await Axios.get("/materia/consultarUno/" + id);
    setValues(buscarUna.data);
  }

  const actualizar = async () =>{
    await Axios.put(`/materia/actualizar/${params.id}`, values).then(
      () =>{
        toast.promise(
          Promise.resolve(),
          {
            loading: 'Saving...', // Mensaje de "cargando"
            success: <b>Settings saved!</b>, // Mensaje de éxito en negrita
            error: <b>Could not save.</b>, // Mensaje de error en negrita
          }
        );
      }
    );
  }

  const Eliminar = async (id) =>{
    if(window.confirm ("Esta seguro de eliminar ")){
      await Axios.delete(`/materia/eliminar/${id}`).then(
        toast.success('Se elimino correctamente')
      );
    }
    consultar();
    window.location.reload();
    navigate('/registroMaterias')
  };

  useEffect(() => {
    consultarUna(params.id);
    consultar();
  }, [params.id]);

  const send = (e) => {
    e.preventDefault();
    if(values._id === ""){
      save();
      window.location.reload();
    }else{
      actualizar();
      window.location.reload();
    }
  };

  return (
    <div className="container-fluid">
      <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <h3> Cargar Materias</h3>
      </div>
      {/*Codigo de formulario*/}
      <div>
        <form action="#" method="post" id="contact_form" onSubmit={send}>
          <div class="container text-center">
            <div class="row g-3 align-items-center justify-content-start">
              <div class="col-4">
                <div class="row g-3 align-items-center">
                  <div class="col-auto">
                    <label for="inputEmail6" class="col-form-label">
                      Clave:
                    </label>
                  </div>
                  <div class="col-auto">
                    <input
                      type="text"
                      id="inputText6"
                      class="form-control"
                      name="clave"
                      onChange={CambioEstado}
                      value={values.clave}
                    />
                  </div>
                </div>
              </div>

              <div class="col-4">
                <div class="row g-3 align-items-center">
                  <div class="col-auto">
                    <label for="inputPassword6" class="col-form-label">
                      Nombre:
                    </label>
                  </div>
                  <div class="col-auto">
                    <input
                      type="text"
                      id="inputText6"
                      class="form-control"
                      name="nomMater"
                      onChange={CambioEstado}
                      value={values.nomMater}
                    />
                  </div>
                </div>
              </div>

              <div class="col-4">
                <div class="row g-3 align-items-center">
                  <div class="col-auto">
                    <label for="inputPassword6" class="col-form-label">
                      Creditos:
                    </label>
                  </div>
                  <div class="col-auto">
                    <input
                      type="number"
                      id="inputText6"
                      class="form-control"
                      name="creditos"
                      onChange={CambioEstado}
                      value={values.creditos}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container text-center">
            <div class="row g-3 align-items-center justify-content-start">
              <div class="col-4">
                <div class="row g-3 align-items-center">
                  <div class="col-auto">
                    <label for="inputEmail6" class="col-form-label">
                      Numero de temas:
                    </label>
                  </div>
                  <div class="col-auto">
                    <input
                      type="number"
                      id="inputText6"
                      class="form-control"
                      name="numTem"
                      onChange={CambioEstado}
                      value={values.numTem}
                    />
                  </div>
                </div>
              </div>

              <div class="col-4">
                <div class="row g-3 align-items-center">
                  <div class="col-auto">
                    <label for="inputPassword6" class="col-form-label">
                      Horas practicas:
                    </label>
                  </div>
                  <div class="col-auto">
                    <input
                      type="number"
                      id="inputText6"
                      class="form-control"
                      name="horaPract"
                      onChange={CambioEstado}
                      value={values.horaPract}
                    />
                  </div>
                </div>
              </div>

              <div class="col-4">
                <div class="row g-3 align-items-center">
                  <div class="col-auto">
                    <label for="inputPassword6" class="col-form-label">
                      Horas teoricas:
                    </label>
                  </div>
                  <div class="col-auto">
                    <input
                      type="number"
                      id="inputText6"
                      class="form-control"
                      name="horaTeoric"
                      onChange={CambioEstado}
                      value={values.horaTeoric}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container text-center">
            <div class="row g-3 align-items-center justify-content-start">
              <div class="col-auto">
                <div class="row g-3 align-items-center">
                  <div class="col-auto">
                    <label for="inputEmail6" class="col-form-label">
                      Numero de semestre:
                    </label>
                  </div>
                  <div class="col-auto">
                    <input
                      type="number"
                      id="inputText6"
                      class="form-control"
                      name="semestre"
                      onChange={CambioEstado}
                      value={values.semestre}
                    />
                  </div>
                </div>
              </div>

              <div class="col-auto">
                <div class="row g-3 align-items-center">
                  <div class="col-auto">
                    <label for="inputPassword6" class="col-form-label">
                      Tipo de materia:
                    </label>
                  </div>
                  <div class="col-auto">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      name="tipoMateria"
                      onChange={CambioEstado}
                      value={values.tipoMateria}
                    >
                      <option disabled selected value="">
                        Seleccionar
                      </option>
                      <option>Programa</option>
                      <option>Ingenieria</option>
                      <option>Especialidad</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <div className="submit text-center">
            <input type="submit" value={values._id === "" ? "Agregar Materia" : "Actualizar"} id="form_button" />
          </div>
        </form>

        <table class="table table-striped table-hover table-bordered">
            <thead>
              <tr>
                <th scope="col">N°</th>
                <th scope="col">Clave</th>
                <th scope="col">Nombre</th>
                <th scope="col">Creditos</th>
                <th scope="col">Tema</th>
                <th scope="col">HT</th>
                <th scope="col">HP</th>
                <th scope="col">Semestre</th>
                <th scope="col">Tipo</th>
                <th scope="col">Eliminar</th>
                <th scope="col">Editar</th>
              </tr>
            </thead>
            {materia.map((materia, index) => {
              return(
              <tbody key={materia._id}>
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{materia.clave}</td>
                <td>{materia.nomMater}</td>
                <td>{materia.creditos}</td>
                <td>{materia.numTem}</td>
                <td>{materia.horaTeoric}</td>
                <td>{materia.horaPract}</td>
                <td>{materia.semestre}</td>
                <td>{materia.tipoMateria}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => Eliminar(materia._id)}>
                    <i className="bi bi-trash3"></i>
                  </button>
                </td>
                <td>
                  <button className="btn btn-secondary" onClick={() => navigate(`/registroMaterias/${materia._id}`)}>
                    <i className="bi bi-pencil"></i>
                  </button>
                </td>
              </tr>
            </tbody>
            )
            })}
            
          </table>

      </div>

      {/*Finaliza codigo de formulario*/}

      <div className="col-12 text-center">
        <Link className="" to="/principal">
          <button className="btn btn-dark">Regresar</button>
        </Link>
      </div>
    </div>
  );
}
