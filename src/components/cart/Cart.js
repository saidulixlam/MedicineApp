import { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import classe from '../medicines/MealItem.module.css';

const Cart = (props) => {
    const ctx = useContext(CartContext);

    const orderHandler = () => {
        alert('Your order has been placed')
        ctx.removeAll();
        props.onClose();
    }

    const hasItem = ctx.items.length > 0;
    let totalAmount = 0;

    // Group items by size
    const itemsBySize = ctx.items.reduce((groupedItems, item) => {
        const key = item.size; // Assuming item.size contains the size

        if (!groupedItems[key]) {
            groupedItems[key] = [];
        }
        groupedItems[key].push(item);
        totalAmount += item.price * item.quantity;
        return groupedItems;
    }, {});

    return (
        <Modal onClose={props.onClose}>
            {Object.keys(itemsBySize).map((size) => (

                <ul className={classes['cart-items']}>
                    {itemsBySize[size].map((item) => (
                        <li className={classe.meal} key={item.key}>
                            <div>
                                <h1>{item.name}</h1>
                                <div className={classe.price}> Price:
                                    <span>{item.price}.00 Rs. </span>
                                </div>
                                <div className={classe.price}> Quantity :
                                    <span>x{item.quantity}</span>
                                </div>
                                <div className={classe.price}> Size :
                                    {item.size}
                                </div>
                            </div>
                            <div className={classes.newactions}>
                                <button onClick={() => ctx.addItem({ ...item, quantity: '1' })}>+</button>
                                <button onClick={() => ctx.removeItem(item.id)} className={classes.button}>-</button>
                            </div>
                        </li>
                    ))}
                </ul>

            ))}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItem && <button onClick={orderHandler} className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
}

export default Cart;
