import { useState, useEffect } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [items, setItems] = useState([]);
    console.log(items);

    // Load cart items from localStorage when the component initializes
    useEffect(() => {
        const savedItems = localStorage.getItem("cartItems");
        if (savedItems) {
            setItems(JSON.parse(savedItems));
        }
    }, []);

    const saveItemsToLocalStorage = (items) => {
        localStorage.setItem("cartItems", JSON.stringify(items));
    };

    const addItemHandler = (item) => {
        const newItems = [...items];
        
        // Check if the item with the same ID and size already exists in the cart
        const existingItem = newItems.find(
            (element) => element.id === item.id && element.size === item.size
        );
    
        if (existingItem) {
            // If the same item with the same size exists, increment its quantity
            existingItem.quantity += Number(item.quantity);
        } else {
            // If the item with the same size doesn't exist, add it to the cart
            newItems.push(item);
        }
    
        setItems(newItems);
        saveItemsToLocalStorage(newItems);
    };

    const removeItemHandler = (id) => {
        const newItems = [...items];
        const existingItemIndex = newItems.findIndex(
            (element) => element.id === id
        );

        if (existingItemIndex !== -1) {
            const existingItem = newItems[existingItemIndex];

            if (existingItem.quantity === 1) {
                newItems.splice(existingItemIndex, 1);
            } else {
                existingItem.quantity--;
            }

            setItems(newItems);
            saveItemsToLocalStorage(newItems);
        }
    };
    const removeAll = ()=>{
        setItems([]); // Clear all items
        localStorage.removeItem("cartItems"); 
    } 

    const cartContext = {
        items: items,
        totalAmount: 0, // You can calculate this if needed
        alreadyHas: false, // You can set this flag based on your logic
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        removeAll:removeAll
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
