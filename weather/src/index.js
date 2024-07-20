
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import WeatherProvider from './context/weather_context';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
<WeatherProvider>
  <App/>
</WeatherProvider>)
