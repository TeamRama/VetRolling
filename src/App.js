import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Ingreso from './components/views/Login/Ingreso/Ingreso';
import TablaTurnos from './components/views/Formularios/Turnos/TablaTurnos/TablaTurnos';
import CrearTurno from './components/views/Formularios/Turnos/CrearTurno/CrearTurno';
import EditarTurno from './components/views/Formularios/Turnos/EditarTurno';
import TablaUsuario from './components/views/Formularios/Usuarios/TablaUsuario/TablaUsuario';
import CrearUsuario from './components/views/Formularios/Usuarios/CrearUsuario/CrearUsuario';
import EditarUsuario from './components/views/Formularios/Usuarios/EditarUsuario/EditarUsuario';
import Home from "./components/views/home/Home";
import PaginaPlanes from "./components/views/PaginasPlanes/PaginaPlanes";
import PaginaContacto from "./components/views/Formularios/PaginaContacto/PaginaContacto";
import Pagina404 from './components/views/Pag404/Pagina404';
import SobreNosotros from './components/views/SobreNosotros/SobreNosotros';
import PagAdmin from './components/Pages/PaginaAdmin/PagAdmin';
import './App.css';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";



function App() {

  const [turnos, setTurnos] = useState([]);

  const URL = process.env.REACT_APP_API_VETROLLING;

  useEffect(() => {
    getApi();

  

  }, [])

  const getApi = async () => {
    try {
      const res = await fetch(URL);
      const turnoApi = await res.json();
      
       setTurnos(turnoApi);

    } catch (error) {
      console.log(error);
}

}


    return (


    <div>
      <BrowserRouter>
        <Navigation />
        <main>
          <Routes>
            <Route exact path="/" element={<Home turnos={turnos} />} />
            <Route exact path="/turno/tabla" element={<TablaTurnos turnos={turnos} URL={URL} getApi={getApi} />} />
            <Route exact path="/turno/crear/" element={<CrearTurno URL={URL} getApi={getApi} />} />
            <Route exact path="/turno/editar/:id" element={<EditarTurno URL={URL} getApi={getApi} />} />
            <Route exact path="/usuario/editar/" element={<EditarUsuario URL={URL} getApi={getApi} />} />
            <Route exact path="/usuario/crear" element={<CrearUsuario URL={URL} getApi={getApi} />} />
            <Route exact path="/usuario/tabla" element={<TablaUsuario  turnos={turnos} URL={URL} getApi={getApi} />} />
            <Route exact path="/login/" element={<Ingreso />} />
            <Route exact path="/PaginaPlanes" element={<PaginaPlanes />} />
            <Route exact path="/PaginaContacto" element={<PaginaContacto />} />
            <Route exact path="/SobreNosotros" element={<SobreNosotros />} />
            <Route exact path="*" element={<Pagina404 />} />
            <Route exact path="/PagAdmin" element={<PagAdmin />} />
           

          </Routes>
        </main>
        <Footer />
      </BrowserRouter>

    </div>
  )



};



export default App;
