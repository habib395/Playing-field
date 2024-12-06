import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";

const ListEquipment = () => {
    const { email } = useParams()
    const [equipmentList, setEquipmentList] = useState([])

    // const { user } = useContext(AuthContext)
    // console.log(user.email);

    useEffect(()=>{
        fetch(`http://localhost:5000/equipmentByEmail?email=${email}`)
        .then(res => res.json())
        .then(data => setEquipmentList(data))
        .catch(error => console.error('Error fetching eqipment:', error))
    }, [email])

    return (
        <div>
            <h2>Equipment list for: {email}</h2>
            <ul>
                {equipmentList.length > 0 ? (
                    equipmentList.map((item) =>(
                        <li key={item._id}>
                            <h3>{item.ItemName}</h3>
                            <p>{item.Description}</p>
                            <p>Price: ${item.Price}</p>
                        </li>
                    ))
                       ) : (
                        <p>No equipment found for this user.</p>
                    )}
            </ul>
        </div>
    );
};

export default ListEquipment;