import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Rutas from "./rutas/rutas";
import { Toaster } from "react-hot-toast";
function App() {


  return (
    <body>
    <div>
      <Rutas />
      <Toaster />
    </div>
    </body>
  );
}

export default App;
