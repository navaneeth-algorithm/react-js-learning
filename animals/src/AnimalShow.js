import './AnimalShow.css'
import { useState } from "react";



function AnimalShow({type}){

    const [clicks,setClicks] = useState(1);

    const onHandleClicks = ()=>{
        console.log("Clicks ",type,clicks)
        setClicks(clicks+1);
    }

    return (
        <div className='animal-show' onClick={onHandleClicks}>
       
        <img
        className="animal"
          src={`./svg/${type}.svg`}
          alt={type}
        />
         <img
         className="heart"
          src="./svg/heart.svg"
          alt="Heart"
          width={clicks + clicks * 10}
          height={clicks + clicks * 10}
        />
      </div>
    );
}

export default AnimalShow;