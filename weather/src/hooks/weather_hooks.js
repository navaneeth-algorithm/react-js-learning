import { useContext } from "react"
import { WeatherContext } from "../context/weather_context"

const useWeatherContext = ()=>{

  return useContext(WeatherContext);
}

export default useWeatherContext;
