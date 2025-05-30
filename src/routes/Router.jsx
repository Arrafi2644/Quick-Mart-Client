import React from 'react';
import { Route, Routes } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import Products from '../pages/Products/Products';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                {/* <Route path='/products' element={<Products />} /> */}
                <Route path='/products/:id' element={<ProductDetails />} />
                <Route path='/products/category/:category' element={<Products />} />
            </Route>
        </Routes>
    );
};

export default Router;