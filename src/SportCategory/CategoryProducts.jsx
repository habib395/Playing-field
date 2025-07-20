import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const CategoryProducts = () =>{
    const { categoryName } = useParams();
    console.log(categoryName)
    const [filteredItems, setFilteredItems] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
      const fetchData = async() =>{
        try{
          const res = await fetch("http://localhost:5000/addEquipments");
          const data = await res.json()
          console.log(data)
          const matched = data.filter((item) => item.CategoryName?.toLowerCase() === categoryName.toLowerCase())
          console.log(matched)
          setFilteredItems(matched)
          setLoading(false)
        }catch(error){
          console.error("Error fetching products:", error)
          setLoading(false)
        }
      }
      fetchData()
    }, [categoryName])

    if(loading){
      return <p className="text-center">Loading...</p>
    }

    return (
        <div className="p-6">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Products in "{categoryName}"
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item._id}
            className="border rounded-lg p-4 shadow hover:shadow-md transition"
          >
            <img src={item.Image} alt={item.ItemName} className="w-full h-48 object-cover rounded" />
            <h3 className="text-lg font-semibold mt-2">{item.ItemName}</h3>
            <p className="text-sm text-gray-600">{item.Description}</p>
            <p className="mt-1 font-bold text-green-600">${item.Price}</p>
            <p className="text-sm text-yellow-500">Rating: {item.Rating}</p>
          </div>
        ))}
      </div>
    </div>
    )
}

export default CategoryProducts;