import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LIstEquip from "../../ListEquip/LIstEquip";

const ListEquipment = () => {
    
    const { email } = useParams();
    const [equipmentList, setEquipmentList] = useState([]);
    

  useEffect(() => {
    fetch(`http://localhost:5000/equipment/${email}`)
      .then((res) => res.json())
      .then((data) => setEquipmentList(data))
      .catch((error) => console.error("Error fetching equipment:", error));
  }, [email]);

  return (
    <div>
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
