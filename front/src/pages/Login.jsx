import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from '../utils/axiosConfig'; // Usa la instancia configurada de Axios
import HomeButton from '../components/HomeButton';
import ThemeButton from '../components/ThemeButton';
import '../styles/RegLog.css';


// import { auth } from '../firebaseConfig';



function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/users/login', {
                email,
                password
            });
            // localStorage.setItem('token', response.data.token);
            login(response.data.token);
            alert('Login successful');
            navigate('/'); // Redirigir al home después de un login exitoso
        } catch (error) {
            alert('There was an error logging in!'); // Mostrar alerta en caso de error
            console.error('There was an error logging in!', error);
        }
    };

    return (
        <div className='back-register-log'>

            <div className="container-register-log">
                <div className='home-button'><HomeButton /></div>
                <div className='theme-button'><ThemeButton /></div>

                <div className="register-log-form">
                    <div className="register-log">
                        <h2>Login</h2>
                        <form onSubmit={handleSubmit}>

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
                            <button className='button-log-reg' type="submit">Login</button>
                            <p>Don't have an account? <Link to="/register"><a>Register</a></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
