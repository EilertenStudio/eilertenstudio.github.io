import React from 'react';
import { UserProvider } from './context/UserContext';
import HomePage from './pages/Home';
import './App.css';

const HelloWorld: React.FC = () => {
    return (
        <UserProvider>
            <div className="App">
                <HomePage />
            </div>
        </UserProvider>
    );
};

export default HelloWorld;
