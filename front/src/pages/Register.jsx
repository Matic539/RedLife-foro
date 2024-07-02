import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../utils/axiosConfig'; // Usa la instancia configurada de Axios
import HomeButton from '../components/HomeButton';
import ThemeButton from '../components/ThemeButton';
import '../styles/RegLog.css';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/users/register', {
                username,
                email,
                password
            });
            alert('User registered successfully');
            navigate('/login');
        } catch (error) {
            alert('There was an error registering the user!')
            console.error('There was an error registering the user!', error);
        }
    };

    return (
        <div className='back-register-log'>

            <div className="container-register-log">
                <div className='home-button'><HomeButton /></div>
                <div className='theme-button'><ThemeButton /></div>

                <div className="register-log-form">
                    <div className="register-log">
                        <h2>Register</h2>
                        <form onSubmit={handleSubmit}>

                            <div className="form-group">
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                    placeholder=''
                                />
                                <label>Username</label>
                            </div>

                            <div className="form-group">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder=''
                                />
                                <label>Email</label>
                            </div>

                            <div className="form-group">
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder=''
                                />
                                <label>Password</label>
                            </div>
                            <button className='button-log-reg' type="submit">Register</button>
                            <p>You have an account? <Link to="/login"><a>Login</a></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
