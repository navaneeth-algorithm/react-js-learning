import React from 'react';
import useWeatherContext from '../hooks/weather_hooks';
import { HiSun, HiMoon } from 'react-icons/hi2'; // Ensure you have @heroicons/react installed

const WeatherForm = () => {
  const { weatherCities, onChangeCity, selectedCity, weatherData } = useWeatherContext();

  const renderOptions = weatherCities.map((city) => {
    return (
      <option key={city.id} value={city.id}>
        {city.label}
      </option>
    );
  });

  const getThemeClass = () => {
    if (!weatherData) return '';
    const hour = new Date(weatherData.location.localtime).getHours();
    if (hour >= 6 && hour < 12) return 'bg-morning';
    if (hour >= 12 && hour < 18) return 'bg-afternoon';
    return 'bg-night';
  };

  const getIcon = () => {
    if (!weatherData) return null;
    const hour = new Date(weatherData.location.localtime).getHours();
    if (hour >= 6 && hour < 18) {
      return <HiSun className="h-6 w-6 text-yellow-500" />;
    } else {
      return <HiMoon className="h-6 w-6 text-white" />;
    }
  };

  return (
    <div className={`w-full h-screen ${getThemeClass()} transition-colors duration-500`}>
      <div className="p-4 rounded shadow-lg text-center">
        <form>
          <div>
            <label className="block text-lg font-semibold mb-2">Select Weather City</label>
            <select
              value={selectedCity.id}
              onChange={(event) => onChangeCity(event.target.value)}
              className="p-2 border rounded text-black"
            >
              {renderOptions}
            </select>
          </div>
        </form>
        {weatherData && (
          <div className="mt-4">
            <div className="flex items-center justify-center">
              <h2 className="text-xl font-semibold mr-2">{weatherData.location.name}</h2>
              {getIcon()}
            </div>
            <p>{weatherData.location.localtime}</p>
            <p>{weatherData.current.condition.text}</p>
            <p>{weatherData.current.temp_c} °C</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherForm;
