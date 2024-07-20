import './App.css'
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function App() {

    function getRandomAnimals() {
        const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
        return animals[Math.floor(Math.random() * animals.length)];
    }

    const [animals, setAnimals] = useState([])

    const handleClick = () => {

        setAnimals([...animals, getRandomAnimals()]);
    }

    const renderAnimals = animals.map((animal,index)=>{
        return <AnimalShow key={index} type={animal} />
    })

    return (
        <div className="app">
        <button onClick={handleClick} className="button is-light">Animal Click</button>
        <div className='animal-list'>{renderAnimals }</div>
        </div>
    );
}


export default App;