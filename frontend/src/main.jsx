import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import your global styles (including Tailwind directives)
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);