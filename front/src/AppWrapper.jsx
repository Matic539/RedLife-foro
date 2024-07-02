import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';

function AppWrapper() {
    return (
        <AuthProvider>
            <ThemeProvider>
                <Router>
                    <App />
                </Router>
            </ThemeProvider>
        </AuthProvider>
    );
}

export default AppWrapper;
