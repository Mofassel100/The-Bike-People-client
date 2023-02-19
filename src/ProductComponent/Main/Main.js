import React from 'react';
import { Outlet } from 'react-router-dom';
import Fnavbes from '../Fnavbers/Fnavbes';
import Footer from '../Footer/Footer';
import Navber from '../Navber/Navber';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            {/* <Fnavbes></Fnavbes> */}
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;