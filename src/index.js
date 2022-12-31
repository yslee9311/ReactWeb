import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppTutorial from './tutorial/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App message={'Hello Message'}/> */}
    <AppTutorial />
  </React.StrictMode>
);
