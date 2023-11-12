import React, {useState, useEffect} from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";

import Axios from "../services/axios";

export function AgregarCarrera() {

  const datos = {
    _id: "",
    clave: "",
    nombre: "",
    modalidad: ""
  };

  
 const [values, setValues] = useState(datos);

 const params = useParams();
 const navigate = useNavigate();


  const CambioEstado = (e) =>{
    const {name , value} = e.target;
    setValues({ ...values, [name]:value});
   };
  

  const Guardar = async () =>{
    Axios.post('/carrera/guardar', {
      clave : values.clave,
      nombre: values.nombre,
      modalidad : values.modalidad
    }).then(()=>{
      console.log();
      toast.success("Se guardaron los datos correctamente")
    });
    setValues(datos);
  };

  const listarUna = async(id)=>{
    const buscarUna = await Axios.get('/carrera/consultarUna/'+id);
    setValues(buscarUna.data);
  };

  const updateDatos = async()=> {
    await Axios.put(`/carrera/actualizar/${params.id}`,{
      clave: values.clave,
      nombre: values.nombre,
      modalidad: values.modalidad
    }).then(()=>{
      toast.promise(
        listarUna(),
         {
           loading: 'Saving...',
           success: <b>Settings saved!</b>,
           error: <b>Could not save.</b>,
         }
       );
    })
    navigate('/principal')
  }

  const enviar = (e)=>{
    e.preventDefault();
   if(values._id===""){
    Guardar();
   }else{
    updateDatos();
   }
  };

  useEffect(() => {
  listarUna(params.id);
  }, [params.id])


  return (
    <div className="container-fluid text-center">
      <div id="container">
        <h1>&bull; Registro de Carrera &bull;</h1>
        <div class="underline"></div>
        <div class="icon_wrapper">
        <ion-icon name="reader-outline"></ion-icon>
        </div>
        <form className="row g-3 needs-validation" onSubmit={enviar}>
          <div className="clave">
            <label for="ValidateCustom00" className="form-label">
              
            </label>
            <input
              type="text"
              placeholder="Clave"
              className="form-control"
              id="validationCustom00"
              required
              name="clave"
              value={values.clave}
              onChange={CambioEstado}
            />
          </div>

          <div class="name2">
            <label for="validationCustom01" className="form-label"></label>
            <input
              type="text"
              placeholder="Nombre"
              className="form-control"
              id="validationCustom01"
              required
              name="nombre"
              value={values.nombre}
              onChange = {CambioEstado}
            />
            <div className="valid-feedback">Datos Ingresados con exito!</div>
          </div>

          <div class="subject">
            <label for="validationCustom03" className="form-label"></label>
            <select
              placeholder="Modalidad"
              id="validationCustom04"
              required
              name="modalidad"
              value={values.modalidad}
              onChange = {CambioEstado}
            >
              <option disabled selected value="">
                Modalidad
              </option>
              <option>Escolarizada</option>
              <option>Sabatino</option>
              <option>Mixto</option>
            </select>
          </div>

          <div class="submit">
            <input type="submit" value={values._id==="" ? "Enviar" : "Actualizar"} id="form_button" />
          </div>
        </form>
      </div>
      <br />
      <div className="col-12 text-center">
        <Link className="txtref" to="/principal">
          <button className="btn btn-dark">Regresar</button>
        </Link>
      </div>
    </div>
  );
}
