import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ProjectsProvider} from './context/get_projects.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <ProjectsProvider>
            <App/>
        </ProjectsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();