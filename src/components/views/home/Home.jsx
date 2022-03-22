import React from 'react';
import Portada from './Portada';
import InformacionGralHome from './InformacionGralHome';
import Planes from './planes/Planes';

const Home = () => {
    return (
        <div>
            <Portada></Portada>
            <main className='bg-dark'>
            <InformacionGralHome></InformacionGralHome>
            <Planes></Planes>
            </main>
        </div>
    );
};

export default Home;