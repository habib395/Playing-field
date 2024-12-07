import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";

const ListEquipment = () => {
  const { email } = useParams();
  const [equipmentList, setEquipmentList] = useState([]);

  const { user } = useContext(AuthContext);
  console.log(user.email);

  useEffect(() => {
    fetch(`http://localhost:5000/equipment/${email}`)
      .then((res) => res.json())
      .then((data) => setEquipmentList(data))
      .catch((error) => console.error("Error fetching equipment:", error));
  }, [email]);

  return (
    <div>
      <h2>Equipment list for: {email}</h2>
      <h2>Equipment : {equipmentList.length}</h2>
      <ul>
        {equipmentList.length > 0 ? (
          equipmentList.map((item) => (
            // <li key={item._id}>
            //     <h3>{item.ItemName}</h3>
            //     <p>{item.Description}</p>
            //     <p>Price: ${item.Price}</p>
            // </li>

            //card section add
            <div className="w-10/12 mx-auto py-5">
              <div className="card card-side items-center bg-base-100 shadow-xl">
                <figure>
                  <img src={item.Image} alt={item.ItemName} />
                </figure>
                <div className="flex justify-between w-full p-4">
                 <div>
                 <h2 className="card-title">{item.ItemName}</h2>
                  <p>{item.Description}</p>
                  <p>Price: ${item.Price}</p>
                 </div>
                  <div className="card-actions justify-end">
                    <div className="join join-vertical">
                      <button className="btn join-item">Button</button>
                      <button className="btn join-item">Button</button>
                      <button className="btn join-item">Button</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No equipment found for this user.</p>
        )}
      </ul>
    </div>
  );
};

export default ListEquipment;
