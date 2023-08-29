// import React, { useState } from "react";
// import Button from "../UI/Button/Button";

// const OrderForm = (props) => {
//   const [enteredOrderId, setEnteredOrderId] = useState("");
//   const [enteredPrice, setEnteredPrice] = useState("");
//   const [enteredDish, setEnteredDish] = useState("");
//   const [enteredTable, setEnteredTable] = useState("Food");

//   const orderIdChangeHandler = (event) => {
//     setEnteredOrderId(event.target.value);
//   };

//   const priceChangeHandler = (event) => {
//     setEnteredPrice(event.target.value);
//   };

//   const dishChangeHandler = (event) => {
//     setEnteredDish(event.target.value);
//   };

//   const tableChangeHandler = (event) => {
//     setEnteredTable(event.target.value);
//   };

//   const formSubmitHandler = (event) => {
//     event.preventDefault();
//     const orderData = {
//       orderId: enteredOrderId,
//       price: enteredPrice,
//       dish: enteredDish,
//       table: enteredTable,
//     };
//     localStorage.setItem(enteredOrderId, JSON.stringify(orderData));
//     props.onAddOrder(orderData);
//     setEnteredOrderId("");
//     setEnteredPrice("");
//     setEnteredDish("");
//     setEnteredTable("Table 1");
//   };
//   return (
//     <div>
//       <form onSubmit={formSubmitHandler}>
//         <label htmlFor="orderid">Unique Product ID </label>
//         <input
//           required
//           id="orderid"
//           type="number"
//           min="0"
//           value={enteredOrderId}
//           onChange={orderIdChangeHandler}
//         />
//         <label htmlFor="price">Product Price </label>
//         <input
//           id="price"
//           type="number"
//           min="1"
//           value={enteredPrice}
//           onChange={priceChangeHandler}
//         />
//         <label htmlFor="dish">Product Name </label>
//         <input
//           id="dish"
//           type="text"
//           value={enteredDish}
//           onChange={dishChangeHandler}
//         />
//         <label>Choose a category </label>
//         <select value={enteredTable} onChange={tableChangeHandler} required>
//           <option default={true}>Food</option>
//           <option>Gadget</option>
//           <option>Skincare</option>
//           <option>Others</option>
//         </select>
//         <Button type="submit">Add to Bill</Button>
//       </form>
//     </div>
//   );
// };

// export default OrderForm;
