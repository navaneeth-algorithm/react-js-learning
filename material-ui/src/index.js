import './index.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import {NavigationProvider} from './context/navigation';
import App from "./App";


const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

root.render(
<NavigationProvider>
    <App/>
</NavigationProvider>
);
