
import './App.css';
import NavBar from './components/NavBar/NavBar';
/* import ItemListContainer from './components/ItemListContainer/ItemListContainer'; */
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';

function App() {
  return (
    <div className="App">
       <NavBar />
       {/* <ItemListContainer greeting={"Productos en Oferta"} /> */}
       
       <ItemDetailContainer />
    </div>
  );
}

export default App;
