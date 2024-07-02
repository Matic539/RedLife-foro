const express = require('express');
const { register, login } = require('../controllers/usersController');
const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post('/register', register);
// Ruta para el login de usuarios
router.post('/login', login);

module.exports = router;
