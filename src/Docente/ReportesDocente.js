import React, { useState } from "react";
import "./estructura.css";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

export default function ReportesDocentes() {
  const [selectedMonth, setSelectedMonth] = useState("");
  const notify = () => toast.success("Imprimiendo reporte");

  const descargarReporte = async (month) => {
    try {
      const response = await axios.get(`http://localhost:4000/${month}`);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `reporte_${month}.pdf`);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error(error);
    }
  };

  const handlePrintClick = () => {
    if (selectedMonth) {
      descargarReporte(selectedMonth);
      notify();
    } else {
      toast.error("Por favor selecciona un mes.");
    }
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <div className="container-fluid">
      <Toaster />
      <br />
      <br />
      
      <br />
      <center>
        <h2 class="titulodocente">Generar reportes</h2>
      </center>
      <br />
      <br />
      <br />
      <br />
      
      <br />
      <center>
        <h3 class="reporteimprimir">
          Elige el periodo del reporte a generar:
        </h3>

        <select
          name="Reportes"
          class="selecteportes"
          value={selectedMonth}
          onChange={handleMonthChange}
        >
          <optgroup label="2022">
            <option value="">Seleccione un mes</option>
            <option value="enero">Enero</option>
            <option value="febrero">Febrero</option>
            <option value="marzo">Marzo</option>
            <option value="abril">Abril</option>
            <option value="mayo">Mayo</option>
            <option value="junio">Junio</option>
            <option value="julio">Julio</option>
            <option value="agosto">Agosto</option>
            <option value="septiembre">Septiembre</option>
            <option value="octubre">Octubre</option>
            <option value="noviembre">Noviembre</option>
            <option value="diciembre">Diciembre</option>
          </optgroup>
        </select>
        <br />
        <br />
        <br />
        <button
          type="button"
          class="btn btn-success"
          onClick={handlePrintClick}
        >
          Imprimir
        </button>
     
            </center> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> 
        </div>

      
    );
}