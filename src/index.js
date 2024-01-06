import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { getImages, results } from './data.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App getImages={ getImages } results={ results } />);
