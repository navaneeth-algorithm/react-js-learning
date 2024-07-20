
import BookInputBar from "./components/BookInputBar";
import BookList from "./components/BookList";

function App(){
  
    return (
    <div className="app">
            <h1>Reading List</h1>
            <BookList />
            <BookInputBar/>
    </div>);
}

export default App;
