import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Make sure App is correctly imported
// import './index.css'; // Include any global styles

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
