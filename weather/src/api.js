import axios from "axios"

const getWeather = async(lat,long)=>{
  const URL = process.env.REACT_APP_BASE_URL+`/current.json?key=${process.env.REACT_APP_API_KEY}&q=${lat},${long}`
  const result = await axios.get(URL)
  if(result.status===200){
    //console.log(result);
    return result.data;
  }

   return null;


}


export {getWeather}
