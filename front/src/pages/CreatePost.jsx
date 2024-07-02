import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axiosConfig'; // Usa la instancia configurada de Axios
import '../styles/CreatePost.css';


function CreatePost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.post('/posts', {
                title,
                content
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            alert('Post created successfully');
            navigate('/');
        } catch (error) {
            alert('There was an error creating the post!');
            console.error('There was an error creating the post!', error);
        }
    };

    return (
        <div className='back-create'>
            <div className="create">
                <h1>Create Post</h1>
            </div>
            <div className="create-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group-post">
                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group-post">
                        <textarea
                            placeholder="Content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <div className='button-create'>
                        <button type="submit">Create Post</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreatePost;
