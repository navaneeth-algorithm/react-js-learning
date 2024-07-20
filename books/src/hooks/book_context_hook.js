import { useContext } from "react";
import BookContext from "../context/book_context";

function useBookHookContext(){
    const bookContext = useContext(BookContext);
    return bookContext;
}

export default useBookHookContext;