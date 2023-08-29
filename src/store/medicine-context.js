import React from "react";

const MedicineContext = React.createContext({
    items:[],
    addMedicine:(item)=>{}
})
 
export default MedicineContext;