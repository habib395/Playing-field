import { NavLink, useLoaderData } from "react-router-dom"

const AllSport = () =>{
    const allProducts = useLoaderData()
    // console.log(allProducts);

    return(
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">SPORT EQUIPMENT</h1>
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
                        allProducts.map((product) => (
                            <tr key={product.id} className="text-center">
                                <td className="border px-4 py-2">
                                <img src={product.image} alt={product.itemName} className="h-12 w-12 object-cover mx-auto"/>
                                </td>
                                <td className="border px-4 py-2">
                                {product.itemName}
                                </td>
                                <td className="border px-4 py-2">
                                {product.categoryName}
                                </td>
                                <td className="border px-4 py-2">
                                {product.price.toFixed(2)} $
                                </td>
                                <td className="border px-4 py-2">
                                {product.stockStatus} in stock 
                                </td>
                                <td className="border px-4 py-2">
                                <NavLink to={`/details/${product.id}`}>
                                <button className="btn btn-success">View Details</button>
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