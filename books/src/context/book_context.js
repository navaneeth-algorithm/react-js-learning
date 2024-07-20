import { createContext, useEffect, useState } from "react";
import { onAPICreateBook, onAPIUpdateBook, onAPIDeleteBook, onAPIGetBooks } from "../api";

const BookContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    onGetBooks();
  }, []);

  // Get Books
  const onGetBooks = async () => {
    try {
      const updatedBooks = await onAPIGetBooks();
      setBooks(updatedBooks);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  // Create Book
  const onCreateBook = async (title) => {
    try {
      const newBook = await onAPICreateBook(title);
      setBooks([...books, newBook]);
    } catch (error) {
      console.error("Error creating book:", error);
    }
  };

  // Edit/Update Book
  const onUpdateBook = async (id, title) => {
    try {
      const updatedBook = await onAPIUpdateBook(id, title);
      const updatedBooks = books.map((book) =>
        book.id === updatedBook.id ? updatedBook : book
      );
      setBooks(updatedBooks);
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  // Delete Book
  const onDeleteBook = async (id) => {
    try {
      await onAPIDeleteBook(id);
      const updatedBooks = books.filter((book) => book.id !== id);
      setBooks(updatedBooks);
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const valueToShare = {
    books,
    onCreateBook,
    onUpdateBook,
    onDeleteBook,
    onGetBooks,
  };

  return (
    <BookContext.Provider value={valueToShare}>
      {children}
    </BookContext.Provider>
  );
}

export default BookContext;
export { Provider };
