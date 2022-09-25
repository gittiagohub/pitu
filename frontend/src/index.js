import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './app.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

library.add(faExclamationTriangle)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
