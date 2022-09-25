import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';


function App() {
  return (
    
    <div className="App">
         <Navbar />   
         <ItemListContainer greeting = {'Bienvenidos a 3DPlain'}/>
    </div>
  );
}

export default App;
