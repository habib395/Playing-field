import { useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom"

const AllSport = () =>{
    const allProducts = useLoaderData()
    const [products, setProducts] = useState(allProducts)
    
    const handleSortByPrice = () => {
        const sortedProducts = [...products].sort((a, b) => parseFloat(a.Price) - parseFloat(b.Price))
        setProducts(sortedProducts)
    }

    return(
        <div className="container mx-auto p-10">
            <h1 className="text-2xl font-bold mb-4 text-center text-green-400">SPORT EQUIPMENT</h1>

            <button onClick={handleSortByPrice} className="btn bg-green-500 my-2">Sort By Price</button>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Image</th>
                        <th className="border px-4 py-2">Item Name</th>
                        <th className="border px-4 py-2">Category</th>
                        <th className="border px-4 py-2">Price</th>
                        <th className="border px-4 py-2">Stock Status</th>
                        <th className="border px-4 py-2">More Info</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => (
                            <tr key={product._id} className="text-center">
                                <td className="border px-4 py-2">
                                <img src={product.Image} alt={product.ItemName} className="h-12 w-12 object-cover mx-auto"/>
                                </td>
                                <td className="border px-4 py-2">
                                {product.ItemName}
                                </td>
                                <td className="border px-4 py-2">
                                {product.CategoryName}
                                </td>
                                <td className="border px-4 py-2">
                                {product.Price} $
                                </td>
                                <td className="border px-4 py-2">
                                {product.StockStatus} in stock 
                                </td>
                                <td className="border px-4 py-2">
                                <NavLink to={`/allDetails/${product._id}`}>
                                <button className="btn bg-green-400">View Details</button>
                                </NavLink>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllSport