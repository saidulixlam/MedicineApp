import { useContext} from "react";
import CartIcon from "../cart/CartIcon";
import classes from './HeaderCartButton.module.css'
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
    const cartCtx=useContext(CartContext);
    let totalItem=0;
    cartCtx.items.forEach(element => {
        totalItem=totalItem+Number(element.quantity)
        
    });
    return ( 
        <button className={classes.button} onClick={props.onShow}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                {totalItem}
            </span>
        </button>
     );
}
 
export default HeaderCartButton;
