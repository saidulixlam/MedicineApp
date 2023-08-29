import { Fragment, useContext } from "react";
import React, { useState } from "react";
import classes from './InputForm.module.css';
import MedicineContext from "../../store/medicine-context";
const InputForm = () => {
    const ctx=useContext(MedicineContext);
    const [enteredOrderId, setEnteredOrderId] = useState("");
    const [enteredPrice, setEnteredPrice] = useState("");
    const [enteredDish, setEnteredDish] = useState("");
    
   
    const orderIdChangeHandler = (event) => {
        setEnteredOrderId(event.target.value);
    };

    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value);
    };

    const dishChangeHandler = (event) => {
        setEnteredDish(event.target.value);
    };


    const formSubmitHandler = (event) => {
        event.preventDefault();
        const orderData = {
            id: enteredOrderId,
            name:enteredOrderId,
            price: enteredPrice,
            description: enteredDish,
        };
        console.log(orderData);
        ctx.addMedicine({...orderData});
        setEnteredOrderId("");
        setEnteredPrice("");
        setEnteredDish("");
    };
    return (
        <Fragment>
            <form onSubmit={formSubmitHandler} className={classes.form}>
                <div className={classes.input}>
                <div><label htmlFor="orderid">Medicine name:</label>
                
                <input
                    required
                    id="orderid"
                    type="text"
                    min="0"
                    value={enteredOrderId}
                    onChange={orderIdChangeHandler}
                /></div>
                <div>
                <label htmlFor="dish">Description:</label>
                
                <input
                    id="dish"
                    type="text"
                    value={enteredDish}
                    onChange={dishChangeHandler}
                />
                </div>
                <div><label htmlFor="price">Price:</label>
                
                <input
                    id="price"
                    type="number"
                    min="1"
                    value={enteredPrice}
                    onChange={priceChangeHandler}
                /></div>
                </div>
                <button className={classes.button} type="submit">Add Product</button>
            </form>
        </Fragment>
    );
}

export default InputForm;