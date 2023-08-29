import { useContext} from 'react';
import Input from '../UI/Input';
import classes from './MealItemForm.module.css';
import CartContext from '../../store/cart-context';
const MealItemForm = (props) => {
    const ctx = useContext(CartContext);
    const submitHandler = (e) => {
        e.preventDefault();
        const quantity = document.getElementById('amount' + props.item.id).value;
        
        ctx.addItem({...props.item, quantity: Number(quantity) });

        document.getElementById('amount' + props.item.id).value=1;
    }
    return (
        <form className={classes.form} onSubmit={submitHandler} >
            <Input label="Amount" input={{
                id: 'amount' + props.item.id,
                type: 'number',
                min: '1',
                max: '20',
                step: '1',
                defaultValue: 1
            }} />
            <button >+ Add</button>
        </form>
    );
}
export default MealItemForm;