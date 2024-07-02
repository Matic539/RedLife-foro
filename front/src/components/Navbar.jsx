import React from 'react';
import { Link } from 'react-router-dom';
import ThemeButton from './ThemeButton';
import { useAuth } from '../context/AuthContext';
import '../styles/Navbar.css';

function Navbar() {
    const { isAuthenticated, logout } = useAuth();

    return (
        <nav className="navbar">

            <div className="navbar-logo">
                <Link to="/">RedLife</Link>
            </div>

            <div className="navbar-links-container">
                <ul className="navbar-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/create-post">Create +</Link></li>
                </ul>

                <ul className="navbar-buttons">
                    {isAuthenticated ? (
                        <>
                            <li>
                                <button className="navbar-button-logout" onClick={logout}>
                                    Logout
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/register">
                                    <button className="navbar-button-register">Register</button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/login">
                                    <button className="navbar-button-login">Login</button>
                                </Link>
                            </li>
                        </>
                    )}
                    <li>
                        <ThemeButton />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
