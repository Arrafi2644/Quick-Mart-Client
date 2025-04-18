import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='bg-gray-100'>
            <Navbar></Navbar>
            <div className='min-h-screen container mx-auto px-2'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;