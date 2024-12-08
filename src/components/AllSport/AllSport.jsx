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
        <div className="container mx-auto sm:p-10">
            <h1 className="text-2xl font-bold mb-4 text-center text-green-400">SPORT EQUIPMENT</h1>

            <button onClick={handleSortByPrice} className="btn bg-green-500 m-2 sm:m-6">Sort By Price</button>
            <table className="w-11/12 mx-auto bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Image</th>
                        <th className="hidden sm:block border px-4 py-2">Item Name</th>
                        <th className="border px-4 py-2">Price</th>
                        <th className="hidden sm:block border px-4 py-2">Stock Status</th>
                        <th className="border px-4 py-2">More Info</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => (
                            <tr key={product._id} className="text-center">
                                <td className="border px-4 py-2">
                                <img src={product.Image} alt={product.ItemName} className="h-12 w-12 object-cover mx-auto"/>
                                <p className="text-sm sm:hidden">{product.ItemName}</p>
                                </td>
                                <td className="hidden sm:block border px-4 py-2 sm:pb-8">
                                {product.ItemName}
                                </td>
                                <td className="border px-4 py-2">
                                {product.Price} $
                                </td>
                                <td className="hidden sm:block border px-4 py-2 sm:pb-8">
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