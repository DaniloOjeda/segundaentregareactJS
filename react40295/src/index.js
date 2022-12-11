import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//importando un componente
import App from './App';
import reportWebVitals from './reportWebVitals';
//imports globales
import "bootstrap/dist/css/bootstrap.css";
import * as bootstrap from "bootstrap";

const root = ReactDOM.createRoot(document.getElementById('root'));

//renderiza componente
root.render(<App />);

reportWebVitals();
