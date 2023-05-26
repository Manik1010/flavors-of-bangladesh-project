import React from 'react';
import Header from '../componements/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../componements/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Main;