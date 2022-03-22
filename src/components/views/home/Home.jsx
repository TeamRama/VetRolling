import React from 'react';
import Portada from './Portada';
import InformacionGralHome from './InformacionGralHome';
import Planes from './planes/Planes';
import Publicidad from './Publicidad';

const Home = () => {
    return (
        <div>
            <Portada></Portada>
            <main className='bg-dark'>
            <InformacionGralHome></InformacionGralHome>
            <Planes></Planes>
            <Publicidad></Publicidad>
            </main>
        </div>
    );
};

export default Home;