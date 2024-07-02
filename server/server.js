const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const usersRoutes = require('./routes/users');
const postsRoutes = require('./routes/posts');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Habilitar CORS

// Middleware para parsear JSON en el cuerpo de las solicitudes
app.use(bodyParser.json());

// Usar las rutas definidas
app.use('/api/users', usersRoutes);
app.use('/api/posts', postsRoutes);

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/blogDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
