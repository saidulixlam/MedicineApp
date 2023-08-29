import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [items, updatedItems] = useState([]);

    const addItemHandler = (item) => {
    //creating copy's of previous array
       const newItems=[...items];
       //checking if item is already there in new array and getting the index
       const idx=newItems.findIndex((element)=> element.id === item.id);
       // if already there
       if(idx !== -1){
            newItems[idx].quantity+=Number(item.quantity);
       }else{
        newItems.push(item);
       }
       updatedItems(newItems);
    }

    const removeItemHandler = (id) => {
       //creating copy's of previous array
       const newItems=[...items];
       //checking if item is already there in new array and getting the index
       const idx=newItems.findIndex((element)=> element.id === id);
       // if already there
       if(idx !== -1){
        const newItem={...newItems[idx]};//duplicate thaaka item to lolu
        newItem.quantity--;//quantity eta komai dilu
        newItems[idx]=newItem;
        updatedItems(newItems);
       }
    };
console.log('i am running');
    const cartContext = {
        items: items,
        totalAmount: 0,
        alreadyHas: false,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;