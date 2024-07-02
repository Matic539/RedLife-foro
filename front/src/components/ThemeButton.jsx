import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/Buttons.css';

function ThemeButton() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button class="theme__icon" onClick={toggleTheme}>
            {/* {theme === 'light' ? 'Dark Mode' : 'Light Mode'} */}
            <span></span>
            <span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </span>
            <span></span>
        </button>
    )
}

export default ThemeButton;