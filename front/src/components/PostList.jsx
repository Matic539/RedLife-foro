import React, { useEffect, useState } from 'react';
import axios from '../utils/axiosConfig';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import '../styles/PostList.css';

dayjs.extend(relativeTime);

function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/posts');
                setPosts(response.data);
            } catch (error) {
                console.error('There was an error fetching the posts!', error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div className="post-list">
            {posts.map((post) => (
                <div key={post._id} className="post-item">
                    <div className="data-user-time">
                        <strong>{post.authorName}</strong>
                        <p>{dayjs(post.updatedAt).fromNow()}</p>
                        {/* <p>{post.createdAt ? `Posted ${formatDistanceToNow(post.createdAt.toDate())} ago` : 'Just now'}</p> */}
                    </div>
                    <div>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </div>
                    <div className="post-buttons">
                        <button className="like-btn">Like</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PostList;
