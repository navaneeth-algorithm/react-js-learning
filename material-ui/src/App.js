
import Sidebar from "./components/sidebar";
import Route from "./components/Route";
import AccordianPage from "./pages/AccordianPage";
import ButtonPages from "./pages/ButtonPages";
import DropdownPage from "./pages/DropdownPage";



const App = () => {

  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Route to='/'>
          <DropdownPage />
        </Route>
        <Route to='/accordian'>
          <AccordianPage />
        </Route>
        <Route to='/buttons'>
          <ButtonPages />
        </Route>
      </div>
    </div>


  )
}

export default App;
