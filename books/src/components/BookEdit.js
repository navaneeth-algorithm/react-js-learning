import { useState } from "react";

function BookEdit({book,onUpdateBook}){

  const [title,setTitle] = useState(book.title);

  const onTitleChange = (event)=>{
    setTitle(event.target.value);
  }

  const onSaveClick = ()=>{
    onUpdateBook(book.id,title);
  }

  const onSubmit = (event)=>{
    event.preventDefault();
    onUpdateBook(book.id,title);
  }


  return (
    <form onSubmit={onSubmit} className="book-edit">
      <label>Title</label>
      <input onChange={onTitleChange} className="input" value={title}  />
      <button onClick={onSaveClick} className="button is-primary" >Save</button>
    </form>
  );
}

export default BookEdit;
