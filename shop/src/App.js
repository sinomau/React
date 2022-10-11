import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter ,Routes, Route} from 'react-router-dom'

 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting={"Bienvenidos a 3DPlain"} />}/>
        <Route path='/detail/:productId' element={  <ItemDetailContainer />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
