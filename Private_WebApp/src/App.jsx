import React from 'react';
import Loading from './components/loading';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'aos/dist/aos.css';
import 'aos/dist/aos.js';
import 'swiper/css';
import Login from './pages/Login';
import Home from './pages/Home';
import Gold from './pages/Gold';
import User from './pages/User';

function App() {

    return (
        <>
            <BrowserRouter>
                <Loading />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='/Gold' element={<Gold />} />
                    <Route path='/User' element={<User />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;