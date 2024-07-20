import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from './context/book_context';


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
<Provider>
    <App/>
</Provider>
);
