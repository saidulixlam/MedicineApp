import { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import classe from '../medicines/MealItem.module.css';
const Cart = (item) => {
    const ctx = useContext(CartContext);
    const orderHandler = () => {
        item.onClose();
        // alert('order placed')
    }
    const hasItem = ctx.items.length > 0;
    let totalAmount = 0;
    ctx.items.forEach(element => {
        totalAmount += element.price * element.quantity;
    });
    const cartItems = <ul className={classes['cart-items']}>
        {
            ctx.items.map((item) => item.quantity > 0 && (
                <li className={classe.meal} key={item.key}>
                    <div>
                        <h3>{item.name}</h3>
                        <div className={classe.price}>
                            <span>{item.price}.00 Rs. </span>

                        </div>
                        <div>
                            <span>x{item.quantity}</span>
                        </div>
                    </div>

                    <div className={classes.newactions}>
                        <button onClick={() => ctx.addItem({ ...item, quantity: '1' })}>+</button>
                        <button onClick={() => ctx.removeItem(item.id)} className={classes.button}>-</button>
                    </div>

                </li>
            ))
        }
    </ul>
    return (
        <Modal onClose={item.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={item.onClose}>Close</button>
                {hasItem && <button onClick={orderHandler} className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
}

export default Cart;