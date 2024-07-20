import './SearchBar.css';
import { useState } from "react";

function SearchBar({ onHandleSubmit }) {

    const [term,setTerm] = useState('');

    const onInputChange = (event)=>{
        const searchTerm = event.target.value;
        setTerm(searchTerm);
    }

    const onHandleFormSubmit = (event)=>{
        event.preventDefault();
        //only if its greater than  equal to 3
        if(term.trim().length>=3){
            onHandleSubmit(term);
        }
        
    }

    return (
        <div className='search-field'>
            <form onSubmit={onHandleFormSubmit}>
                <label>Search Images</label>
                <input 
                onChange={onInputChange} 
                name="searchField" 
                id="searchField" 
                placeholder="Search for Images"
                value={term}
                />
            </form>
        </div>

    )
}

export default SearchBar;