import { Fragment, useContext, useState } from "react";
import React from "react";
import classes from './InputForm.module.css';
import MedicineContext from "../../store/medicine-context";

const InputForm = () => {
    const ctx = useContext(MedicineContext);
    const [enteredOrderId, setEnteredOrderId] = useState("");
    const [enteredPrice, setEnteredPrice] = useState("");
    const [enteredDish, setEnteredDish] = useState("");
    const [selectedSizes, setSelectedSizes] = useState([]); // Use an array to store selected sizes

    const orderIdChangeHandler = (event) => {
        setEnteredOrderId(event.target.value);
    };

    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value);
    };

    const dishChangeHandler = (event) => {
        setEnteredDish(event.target.value);
    };

    const sizeChangeHandler = (event) => {
        const sizeValue = event.target.value;
        // Check if the size is already selected, if yes, remove it; if not, add it
        setSelectedSizes((prevSizes) => {
            if (prevSizes.includes(sizeValue)) {
                return prevSizes.filter((size) => size !== sizeValue);
            } else {
                return [...prevSizes, sizeValue];
            }
        });
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const orderData = {
            id: enteredOrderId,
            name: enteredOrderId,
            price: enteredPrice,
            description: enteredDish,
            sizes: selectedSizes, // Use an array to store selected sizes
        };
        console.log(orderData);
        ctx.addMedicine({ ...orderData });
        setEnteredOrderId("");
        setEnteredPrice("");
        setEnteredDish("");
        setSelectedSizes([]); // Reset selected sizes after submitting
    };

    return (
        <Fragment>
            <form onSubmit={formSubmitHandler} className={classes.form}>
                <div className={classes.input}>
                    <div>
                        <label htmlFor="orderid">Shoe Name:</label>
                        <input
                            required
                            id="orderid"
                            type="text"
                            min="0"
                            value={enteredOrderId}
                            onChange={orderIdChangeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="dish">Description:</label>
                        <input
                            id="dish"
                            type="text"
                            value={enteredDish}
                            onChange={dishChangeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="price">Price:</label>
                        <input
                            id="price"
                            type="number"
                            min="1"
                            value={enteredPrice}
                            onChange={priceChangeHandler}
                        />
                    </div>
                    <div>
                        <label>Available Sizes:</label>
                        <div className={classes.radio}>
                            <label> S
                                <input
                                    type="checkbox"
                                    value="S"
                                    checked={selectedSizes.includes("S")}
                                    onChange={sizeChangeHandler}
                                />
                            </label>
                            <label> M
                                <input
                                    type="checkbox"
                                    value="M"
                                    checked={selectedSizes.includes("M")}
                                    onChange={sizeChangeHandler}
                                />
                              
                            </label>
                            <label> L
                                <input
                                    type="checkbox"
                                    value="L"
                                    checked={selectedSizes.includes("L")}
                                    onChange={sizeChangeHandler}
                                />
                                
                            </label>
                        </div>
                    </div>
                </div>
                <button className={classes.button} type="submit">Add Product</button>
            </form>
        </Fragment>
    );
}

export default InputForm;
