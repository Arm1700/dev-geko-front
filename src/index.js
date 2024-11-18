import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from './components/pages/context/DataProvider';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter
        future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
        }}
    >
        <DataProvider>
            <App />
        </DataProvider>
    </BrowserRouter>
);

reportWebVitals();
