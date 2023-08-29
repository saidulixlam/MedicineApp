import { useState } from "react";
import MedicineContext from "./medicine-context";
console.log('it is running');
const MedicineProvider = (props) => {
    const [items, updatedItems] = useState([]);

    const addItemHandler = (item) => {
        const newItems = [...items];

        newItems.push(item);
        updatedItems(newItems);
    }

    const medicineContext = {
        items: items,
        //alreadyHas: false,
        addMedicine: addItemHandler,
    }
    return (
        <MedicineContext.Provider value={medicineContext}>
            {props.children}
        </MedicineContext.Provider>
    );
}

export default MedicineProvider;