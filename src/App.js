import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import CrearUsuario from './components/Pages/CrearUsuario/CrearUsuario';
import Ingreso from './components/Pages/Login/Ingreso/Ingreso';
import TablaTurnos from './components/Pages/TablaTurnos/TablaTurnos';
import CrearTurno from './components/Pages/CrearTurno/CrearTurno';
import TablaUsuario from './components/Pages/TablaUsuario/TablaUsuario';
import EditarTurno from './components/Pages/EditarTurno/EditarTurno';
import EditarUsuario from './components/Pages/EditarTurno/EditarTurno';
import Home from "./components/home/Home";
import PaginaPlanes from "./components/Pages/PaginasPlanes/PaginaPlanes";
import PaginaContacto from "./components/Pages/PaginaContacto/PaginaContacto";
import Pagina404 from './components/Pages/Pag404/Pagina404';
import SobreNosotros from './components/Pages/SobreNosotros/SobreNosotros';
import './App.css';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import PagAdmin from './components/Pages/PaginaAdmin/PagAdmin';



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
