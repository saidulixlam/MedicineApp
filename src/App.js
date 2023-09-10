import CartProvider from '../src/store/CartProvider';
import InputForm from './components/Inputform/InputForm';
import Cart from './components/cart/Cart';
import Header from './components/header/Header';
import Meals from './components/medicines/Meals'
import { useState } from 'react';
import MedicineProvider from './store/MedicineProvider';

function App() {
 const [showCart,setShowcart]= useState(false);

 function showCartHandler() {
    setShowcart(true);
 }

 function closeCartHandler() {
    setShowcart(false);
 }
 
  return (
    <CartProvider>
      <MedicineProvider>
      {showCart && <Cart onClose={closeCartHandler}/>}
      <Header onShow={showCartHandler}></Header>
      <div>
      <InputForm/>
      </div>
      <Meals></Meals>
      </MedicineProvider>
    </CartProvider>
  );
}

export default App;
