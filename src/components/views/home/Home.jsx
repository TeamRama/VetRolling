import React from 'react';
import Portada from './Portada';
import InformacionGralHome from './InformacionGralHome';
import Publicidad from './Publicidad';
import Productos from './productos/Productos';
import Planes from './planes/Planes';
import Servicio from "./servicios/Servicio"
import Opiniones from './Opiniones';
import Profesionales from './profesionales/Profesionales';
import Clima from './Clima';

const Home = () => {
    return (
        <div>
            <Portada></Portada>
            <Clima></Clima>
            <main className='container'>
            <InformacionGralHome></InformacionGralHome>
            <Planes></Planes>
            <Publicidad></Publicidad>
            <Productos></Productos>
            <Servicio></Servicio>
            <Opiniones></Opiniones>
            <Profesionales></Profesionales>
            </main>
        </div>
    );
};

export default Home;