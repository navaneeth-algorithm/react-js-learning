import { useState } from "react";
import useBookHookContext from "../hooks/book_context_hook";

function BookInputBar(){

    const [title,setTitle] = useState('');
    const {onCreateBook} = useBookHookContext();


    const onFormSubmit = (event)=>{
        event.preventDefault();
        onCreateBook(title);
    }

    const onInputChange = (event)=>{
        setTitle(event.target.value);
    }

    return (
    <div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={onFormSubmit}>
            <label> Title</label>
            <input className="input" type="text" id="title" name="title" value={title} placeholder="Book Title" onChange={onInputChange} />
            <input className="button" type="submit" id="submit" />
        </form>
    </div>);
}

export default BookInputBar;
