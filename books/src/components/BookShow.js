import { useState } from 'react';
import BookEdit from './BookEdit';
import useBookHookContext from '../hooks/book_context_hook';

function BookShow({book}){

  const [editMode,setEditMode] = useState(false);

  const {onDeleteBook,onUpdateBook} = useBookHookContext();

  const onEditBookHandle=()=>{
    setEditMode(true);
  }

  const onDeleteBookHandle = ()=>{
    onDeleteBook(book.id);
  }

  const onSaveEdit = (id,title)=>{
    setEditMode(false);
    onUpdateBook(id,title);
  }

    return (
    <div className="book-show">

      <div className='actions'>
        <button className='delete' onClick={onDeleteBookHandle} />
       {!editMode &&<button className='edit' onClick={onEditBookHandle} />}
      </div>

       <img src={`https://picsum.photos/seed/book_${book.id}/300/200`} alt='here is book'/>
       {editMode?(<BookEdit onUpdateBook={onSaveEdit} book={book} />):(<p>{book.id}.{book.title}</p>)}
    </div>
    );
}

export default BookShow;
