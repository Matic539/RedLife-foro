import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './HomeButton.css';

function HomeButton() {
    const navigate = useNavigate();

    return (
        <div className="back-to-home">
            <button onClick={() => navigate('/')} className="back-to-home-button">
                Home
            </button>
        </div>
    );
}

export default HomeButton;