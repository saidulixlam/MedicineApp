// import React from "react";
// import OrdersDisplay from "../OrdersDisplay/OrdersDisplay";

// const OrdersList = (props) => {
//   const filteredTable1Orders = props.allOrdersArray.filter(
//     (order) => order.table === "Food"
//   );

//   const filteredTable2Orders = props.allOrdersArray.filter(
//     (order) => order.table === "Gadget"
//   );

//   const filteredTable3Orders = props.allOrdersArray.filter(
//     (order) => order.table === "Skincare"
//   );

//   const filteredTable4Orders = props.allOrdersArray.filter(
//     (order) => order.table === "Others"
//   );

//   return (
//     <div>
//       <h1>Orders</h1>
//       <ul>
//         <h3>Food</h3>
//         <ul>
//           {filteredTable1Orders.map((order) => (
//             <OrdersDisplay
//               key={order.orderId}
//               id={order.orderId}
//               price={order.price}
//               dish={order.dish}
//               table={order.table}
//               onDelete={props.onDeleteOrder}
//             />
//           ))}
//         </ul>

//         <h3>Gadget</h3>
//         <ul>
//           {filteredTable2Orders.map((order) => (
//             <OrdersDisplay
//               key={order.orderId}
//               id={order.orderId}
//               price={order.price}
//               dish={order.dish}
//               table={order.table}
//               onDelete={props.onDeleteOrder}
//             />
//           ))}
//         </ul>

//         <h3>Skincare</h3>
//         <ul>
//           {filteredTable3Orders.map((order) => (
//             <OrdersDisplay
//               key={order.orderId}
//               id={order.orderId}
//               price={order.price}
//               dish={order.dish}
//               table={order.table}
//               onDelete={props.onDeleteOrder}
//             />
//           ))}
//         </ul>
//         <h3>Others</h3>
//         <ul>
//           {filteredTable4Orders.map((order) => (
//             <OrdersDisplay
//               key={order.orderId}
//               id={order.orderId}
//               price={order.price}
//               dish={order.dish}
//               table={order.table}
//               onDelete={props.onDeleteOrder}
//             />
//           ))}
//         </ul>
//       </ul>
//     </div>
//   );
// };

// export default OrdersList;
