import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000/api', // Cambia esta URL si tu API está en un servidor diferente
});

export default instance;
