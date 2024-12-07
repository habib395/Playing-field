// import { useEffect, useState } from "react";

// const EquipmentByEmail = ({ userEmail }) => {

//     const [items, setItems] = useState([])

//     useEffect(() =>{
//         fetch(`http://localhost:5000/equipmentByEmail=${encoderURLComponent(userEmail)}`)
//         .then((res) => res.json())
//         .then((data) => setItems(data))
//         .catch((err) => console.err('Error fetching data:', err))
//     }, [userEmail])

//     return (
//         <div>
//             <h1>Items for User: {userEmail}</h1>
//             <div className="item-container">
//             {items.map((item) => (
//                 <div key={item._id} className="item-card">
//                     <img src={item.Image} alt={item.ItemName} />
//                     <h2>{item.itemNAme}</h2>
//                     <p>{item.Description}</p>
//                     <p>Price: {item.Price}</p>
//                     <p>Stock: {item.StockStatus}</p>
//                 </div>
//             ))}
//             </div>
//         </div>
//     );
// };

// export default EquipmentByEmail;