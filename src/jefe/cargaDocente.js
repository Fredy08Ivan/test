import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "../services/axios";

export default function CargaDocente() {
  const datos = {
    nomMater: "",
    clave: "",
    creditos: "",
    numTem: "",
    horaPract: "",
    horaTeoric: "",
    tipoMateria: "",
    semestre: "",
    personal: "",
  };

  const params = useParams();
  const [permat, setPermat] = useState(datos);

  const [personal, setPersonal] = useState([]);
  const [materia, setMateria] = useState([]);

  const CambioEstado = (e) => {
    const { name, value } = e.target;
    setPermat({ ...permat, [name]: value });
    console.log(value);
  };

  const save = async () => {
    await Axios.post(``, {
      nomMater: permat.nomMater,
      clave: permat.clave,
      creditos: permat.creditos,
      numTem: permat.numTem,
      horaPract: permat.horaPract,
      horaTeoric: permat.horaTeoric,
      tipoMateria: permat.tipoMateria,
      semestre: permat.semestre,
      personal: params.id,
    }).then(() => {});
    setPermat(datos);
  };

  const buscarPersonal = async () => {
    const res = await Axios.get("/personal/consultar");
    setPersonal(res.data);
  };

  const buscarMateria = async () => {
    const res = await Axios.get("/materia/consultar");
    setMateria(res.data);
  };

  useEffect(() => {
    buscarPersonal();
    buscarMateria();
  }, []);

  const send = (e) => {
    e.preventDefault();
    save();
  };

  return (
    <div className="container-fluid">
      <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <h3>Asignación de materias</h3>
      </div>

      <form class="row g-3" onSubmit={send}>
        <div class="">
          <select
            class="form-select form-select-lg mb-3"
            aria-label="Large select example"
            name="personal"
            onChange={CambioEstado}
          >
            <option selected disabled value="">
              Docente
            </option>
            {personal.map((persona, index) => (
              <option value={persona._id}>{persona.nombre}</option>
            ))}
          </select>
        </div>

        <div class="">
          <table class="table table-bordered table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Clave</th>
                <th scope="col">Nombre de la materia</th>
                <th scope="col">Tipo de materia</th>
                <th scope="col">Selección</th>
              </tr>
            </thead>
            {materia.map((materias, index) => (
              <tbody class="table-group-divider">
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{materias.clave}</td>
                  <td>{materias.nomMater}</td>
                  <td>{materias.tipoMateria}</td>

                  <td>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>

        <center>
          <div class="">
            <button type="submit" class="btn btn-primary btn-lg mb-3">
              Guardar
            </button>
          </div>
        </center>
      </form>

      <div className="col-12 text-center">
        <Link className="textref" to="/asignarDoc">
          <button className="btn btn-dark">Regresar</button>
        </Link>
      </div>
    </div>
  );
}
