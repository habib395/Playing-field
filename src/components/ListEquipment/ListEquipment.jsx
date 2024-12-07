import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LIstEquip from "../../ListEquip/LIstEquip";

const ListEquipment = () => {
    // const { user } = useContext(AuthContext);
    // console.log(user.email);
    
    const { email } = useParams();
    const [equipmentList, setEquipmentList] = useState([]);
    
    // const { _id } = equipmentList
    // console.log(equipmentList);

  useEffect(() => {
    fetch(`http://localhost:5000/equipment/${email}`)
      .then((res) => res.json())
      .then((data) => setEquipmentList(data))
      .catch((error) => console.error("Error fetching equipment:", error));
  }, [email]);

  return (
    <div>
      <h2 className="text-xl text-green-400 text-center my-2">Equipment list for: {email}</h2>
      <ul>
        {equipmentList.length > 0 ? (
          equipmentList.map((item) => (
            <LIstEquip key={item._id} equipmentList={equipmentList} setEquipmentList={setEquipmentList} item={item}></LIstEquip>
          ))
        ) : (
          <p>No equipment found for this user.</p>
        )}
      </ul>
    </div>
  );
};

export default ListEquipment;
