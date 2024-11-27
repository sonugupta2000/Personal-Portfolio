import React from 'react';
import ReactDOM from 'react-dom'; // Make sure this is correctly imported
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for routing
import App from './App'; // Import your main App component

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root') // Make sure the ID matches your HTML file
);
