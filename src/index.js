import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode> {/* StrictMode is a tool for highlighting potential problems in an application. */}
    <App />
  </React.StrictMode>,
    document.getElementById('root') // The root DOM node is the entry point of the React app.
);

reportWebVitals();
