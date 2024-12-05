import { useEffect, useState } from "react";

const SportCategory = () => {
    const [category, setCategory] = useState([])

    useEffect(() =>{
        fetch("http://localhost:5000/addEquipment")
        .then((res) => res.json())
        .then((data) => console.log(data[`${_id}`].CategoryName
        ))

    }, [])

    return (
        <div>
            <h2>Sport Category</h2>
        </div>
    );
};

export default SportCategory;