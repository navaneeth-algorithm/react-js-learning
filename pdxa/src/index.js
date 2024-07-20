//1. import React and ReactDON
//2. Get the reference to the root element
//3. Give the controller to the react
//4. define the component
//5. render the component via root
import 'bulma/css/bulma.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App  from './App';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(<App/>);