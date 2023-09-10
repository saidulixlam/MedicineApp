import { useContext, useState } from 'react';
import Input from '../UI/Input';
import classes from './MealItemForm.module.css';
import CartContext from '../../store/cart-context';

const MealItemForm = (props) => {
    const ctx = useContext(CartContext);
    const [selectedSize, setSelectedSize] = useState(props.item.sizes[0] || ''); // Initialize with the first size or an empty string

    const sizeChangeHandler = (event) => {
        setSelectedSize(event.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const quantity = document.getElementById('amount' + props.item.id).value;
        ctx.addItem({
            ...props.item,
            quantity: Number(quantity),
            size: selectedSize, // Include the selected size
        });

        document.getElementById('amount' + props.item.id).value = 1;
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.options}>
                {props.item.sizes && props.item.sizes.length > 0 && (
                    <label>
                        Available Size:
                        <select
                            value={selectedSize}
                            onChange={sizeChangeHandler}
                        >
                            {props.item.sizes.map((size) => (
                                <option key={size} value={size}>
                                    {size}
                                </option>
                            ))}
                        </select>
                    </label>
                )}
            </div>
            <div>
                <Input
                    label="Amount"
                    input={{
                        id: 'amount' + props.item.id,
                        type: 'number',
                        min: '1',
                        max: '99',
                        step: '1',
                        defaultValue: 1,
                    }}
                />
                <button>+ Add</button>
            </div>
        </form>
    );
};

export default MealItemForm;
