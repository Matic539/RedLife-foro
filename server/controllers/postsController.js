const Post = require('../models/Post');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'secret';

// Controlador para crear un nuevo post
exports.createPost = async (req, res) => {
    const { title, content } = req.body;
    const token = req.headers['authorization'].split(' ')[1]; // Extraer el token del header Authorization
    const decoded = jwt.verify(token, JWT_SECRET);
    const userId = decoded.userId;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).send("User not found");
        }
        const newPost = new Post({ title, content, author: userId, authorName: user.username });
        await newPost.save();
        res.status(201).json({
            message: "Post created successfully",
            post: {
                title: newPost.title,
                content: newPost.content,
                author: newPost.authorName,
                createdAt: newPost.createdAt,
                updatedAt: newPost.updatedAt
            }
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Controlador para obtener todos los posts
exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('author', 'username email');
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

