import React from 'react';
import PostList from '../components/PostList';
import '../styles/Home.css';

function Home() {
    return (
        <div>
            <div className='home-back'>
                <div className='home' id='#home'>
                    <h1>Welcome to RedLife</h1>
                </div>
            </div>
            <PostList />
        </div>
    );
}

export default Home;
