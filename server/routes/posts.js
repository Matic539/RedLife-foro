const express = require('express');
const router = express.Router();
const { createPost, getPosts } = require('../controllers/postsController');
const authMiddleware = require('../middleware/authMiddleware');

// const router = express.Router();

router.post('/', authMiddleware, createPost); // Ruta para crear un post
router.get('/', getPosts); // Ruta para obtener todos los posts

module.exports = router;

