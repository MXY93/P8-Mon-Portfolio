import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';
import DarkModeProvider from './DarkModeProvider';
import './styles/global.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback="...loading">
      <DarkModeProvider>
          <App />
      </DarkModeProvider>
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();