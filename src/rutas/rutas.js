import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layouts from "../components/layouts/layouts";



import Login from "../components/login";
import Reportes from "../components/reportes/generaReporte";



import Tutoria from "../components/reportes/infoTutoria";



import NOTFOUND from "../paginas/notFound";
import Registrarse from "../components/registrarse";
import Vistas from "../paginas/vistaDeDatos";
import Contacto from "../components/contacto/contacto";
import FormularioPrueba from "../formularioPrueba";
import VCP from "../components/vistas_jefe/vistaDeCarrera/vistaCarreraPersonal";


// Vista Jefe
import PrincipalJefe from "../components/principal";
import VistaDeCarreras from "../jefe/vistaDeCarreras";
import Docentes from "../jefe/asignarDocentes";
import Tutorados from "../jefe/asignarTutor";
import TutoActuali from "../jefe/vistasDeActualización/asignTutoActua";
import CargaDocente from "../jefe/cargaDocente";

// Vista admin
// import PrincipalAdm from "../admin/principal";
import PrincipalAdmin from "../admin/principal";
import RegistroD from "../admin/registroPersonal";
import Materias from "../admin/registrarMaterias";
import AgregarAlumnos from "../admin/registroAlumnos";
import Aulas from "../admin/registroAulas";
import Periodo from "../admin/registroPeriodo";
import AgregaGrupo from "../admin/registroGrupos";
import { AgregarCarrera } from "../admin/registroCarrera";

import VistaPersonal from "../admin/personal2";
import VistaAulas from "../admin/aulas2";
import VistaMaterias from "../admin/materias2";
import VistaAlumnos from "../admin/alumnos2";
import VistaGrupos from "../admin/grupos2";
import Carreras from "../admin/carreras2";

// Vista de docentes
import Mdocente from "../Docente/Mdocente.js";
import Asistencia from "../Docente/Asistencia";
import VerTemas from "../Docente/verTemas";
import ReportesDocente from "../Docente/ReportesDocente";
import Vermaterias from "../Docente/verMaterias";
import VerGrupos from "../Docente/verGrupos";
import Temas from "../Docente/Temas";


import MenuVertical from "../components/Formulario";

// Vista de tutorados

function Rutas() {
  return (
    <div>
      <Router>
        <Layouts />
        <Routes>
         

          {/* <Route exact path="/" element={<Login />} /> */}
          {/* <Route exact path="/Gruposymaterias" element={<Gruposymaterias />} /> */}
            {/* <Route exact path="/prueba"  element={<FormularioPrueba/>}/>
          <Route exact path="/prueba/:id"  element={<FormularioPrueba/>}/> */}

          <Route exact path="*" element={<NOTFOUND />} />
          <Route exact path="/generarReportes" element={<Reportes />} />
          
         
         
          <Route exact path="registrate" element={<Registrarse />} />
          <Route exact path="/vistaPersonal" element={<VistaPersonal />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route exact path="/aggCarrera/:id" element={<AgregarCarrera />} />
          <Route exact path="/vistCarrera" element={<Carreras />} />

        

          
          <Route exact path="/vcp" element={<VCP />} />

          {/*Vistas de admin*/}
          {/* <Route exact path="/adminPrincipal" element={<PrincipalAdm />} /> */}
          <Route exact path="/" element={<PrincipalAdmin />} />
          <Route exact path="/registroPersonal" element={<RegistroD />} />
          <Route exact path="/registroPersonal/:id" element={<RegistroD />} />
          <Route exact path="/registroMaterias" element={<Materias />} />
          <Route exact path="/registroMaterias/:id" element={<Materias />} />
          <Route exact path="/registroAlumno" element={<AgregarAlumnos />} />
          <Route exact path="/registroAulas" element={<Aulas />} />
          <Route exact path="/registroPeriodos" element={<Periodo />} />
          <Route exact path="/registroGrupo" element={<AgregaGrupo />} />
          <Route exact path="/registroCarrera" element={<AgregarCarrera />} />

          {/* Vistas de Jefe de carrera */}
          <Route exact path="/principalJefe" element={<PrincipalJefe />} />
          <Route exact path="/vistas" element={<Vistas />} />
          <Route exact path="/asignarDoc" element={<Docentes />} />
          <Route exact path="/asigTutora" element={<Tutorados />} />
          <Route exact path="/actualiTutor" element={<TutoActuali />} />
          <Route exact path="/cargarDocente" element={<CargaDocente />} />
          <Route exact path="/vistaAulas" element={<VistaAulas />} />
          <Route exact path="/vistaMateria" element={<VistaMaterias />} />
          <Route exact path="/vistaAlumnos" element={<VistaAlumnos />} />
          <Route exact path="/vistaGrupos" element={<VistaGrupos />} />
          <Route exact path="/vistaCarreras" element={<VistaDeCarreras />} />

          {/* Vista Docente-tutor */}
          {/* <Route exact path="/Tutoria" element={<Tutoria/>}/> */}

          {/* Vista Docente */}
          <Route exact path="/Mdocente" element={<Mdocente />} />
          <Route exact path="/Asistencia" element={<Asistencia />} />
          <Route exact path="/verTemas" element={<VerTemas />}/>
          <Route exact path="/ReportesDocente" element={<ReportesDocente />} />
          <Route exact path="/verMaterias" element={<Vermaterias />} />
          <Route exact path="/verMaterias/:id" element={<Vermaterias />} />
          <Route exact path="/verGrupos" element={<VerGrupos />} />
          <Route exact path="/temas" element={<Temas/>}/>

          <Route exact path="/menu" element={<MenuVertical />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Rutas;
