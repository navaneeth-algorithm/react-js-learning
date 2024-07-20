//import './BookList.css';
import BookShow from "./BookShow";
import useBookHookContext from "../hooks/book_context_hook";

function BookList(){

    const {books} = useBookHookContext();

    const renderBookList = books.map((book)=>{
        return (<BookShow key={book.id} book={book} />);
    });

    return (
    <div className="book-list">
        {renderBookList}
    </div>);
}

export default BookList;
