import { createContext, useEffect, useState } from "react";
import { getWeather } from "../api";


const WeatherContext = createContext();

function WeatherProvider({ children }) {

  const weatherCities = [
    { id: 101, label: 'Udupi', value: 'udupi', lat: '13.3409', long: '74.7421' },
    { id: 102, label: 'Maryland', value: 'maryland', lat: '39.0458', long: '-76.6413' },
    { id: 103, label: 'Bangalore', value: 'bangalore', lat: '12.9716', long: '77.5946' },
    { id: 104, label: 'Mumbai', value: 'mumbai', lat: '19.0760', long: '72.8777' },
    { id: 105, label: 'Pune', value: 'pune', lat: '18.5204', long: '73.8567' }
  ];



  const [selectedCity, setSelectedCity] = useState(weatherCities[0]);
  const [weatherData,setWeatherData] = useState(null);


  useEffect(()=>{

    onCallWeatherAPI();

  },[selectedCity])

  const onChangeCity = (id)=>{
    const selectedCity = weatherCities.find((item)=>item.id===parseInt(id));
    setSelectedCity(selectedCity);
  }

  const onCallWeatherAPI = async()=>{
    const apiData = await getWeather(selectedCity.lat,selectedCity.long);
    setWeatherData(apiData);
    console.log('Weather Data: ',apiData);

  }

  const valueToShare = { selectedCity,weatherCities,weatherData,onChangeCity };

  return (<WeatherContext.Provider value={valueToShare}>
    {children}
  </WeatherContext.Provider>)

}

export default WeatherProvider;
export {WeatherContext};
