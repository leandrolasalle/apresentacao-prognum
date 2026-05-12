<<<<<<< HEAD
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
=======
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
>>>>>>> 0c45fc9285af95408cefc30789fabedbce3f2d19
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
