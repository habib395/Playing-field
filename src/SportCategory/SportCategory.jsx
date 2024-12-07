import { useEffect, useState } from "react";
import Cat from "../Cat/Cat";

const SportCategory = () => {
    const [category, setCategory] = useState([])
    console.log(category);

    useEffect(() =>{
        fetch("http://localhost:5000/addEquipments")
        .then((res) => res.json())
        .then((data) => {
            const uniqueCategories = [...new Set(data.map((item) => item.CategoryName))]
            setCategory(uniqueCategories)
        })}, [])

    return (
        <div>
            <h2 className="text-4xl text-green-500 font-bold text-center py-8">Equipment Category</h2>
            <div className="grid grid-cols-5 w-10/12 mx-auto gap-5">
                {
                    category.map((item, idx)=><Cat key={idx} item={item}></Cat>)
                }
            </div>
        </div>
    );
};

export default SportCategory;