import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FormContextProvider from './context/form_context';


const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);
root.render(
<FormContextProvider>
  <App/>
</FormContextProvider>);
