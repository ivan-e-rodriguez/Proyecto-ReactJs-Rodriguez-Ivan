import './App.css';
import './css/style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '././components/Footer';
import ItemListContainer from '././components/ItemListContainer';
import NavBar from '././components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartProvider from './context/CartContext';
import Cart from './components/Cart'



function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/categoria/:tipo" element={<ItemListContainer />} />
          <Route exact path="/producto/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />}/>
        </Routes>

      </BrowserRouter>
      <hr />
      <Footer />
    </CartProvider>
  );
}

export default App;
