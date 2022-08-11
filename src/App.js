
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import Contact from './pages/Contact';
import Detail from './pages/Detail';
import Checkout from './pages/Checkout';
import CartProvider from './Context/CartContext';

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/contacto' element={<Contact />} />
          <Route path='/productos' element={<h1>Productos</h1>} />
          
          <Route path='/:category/:id' element={<Detail />} />
          <Route path='/cart' element={<Checkout />}/> 
          <Route path='*' element={<h1>ERROR 404 - Página no encontrada</h1>} />
        </Routes>
        
        

      </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
