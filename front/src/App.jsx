import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';

function App() {
    const location = useLocation();

    // Determinar si la ruta actual es Register o Login
    const hideNavbar = location.pathname === '/register' || location.pathname === '/login';

    return (
        <>
            {!hideNavbar && <Navbar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/create-post" element={<CreatePost />} />
            </Routes>
        </>
    );
}

export default App;

