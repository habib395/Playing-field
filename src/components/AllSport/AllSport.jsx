import { NavLink, useLoaderData } from "react-router-dom"

const AllSport = () =>{
    const allProducts = useLoaderData()

    // {ItemName, CategoryName, Description, Price, Rating, Customization, ProcessingTime, StockStatus, Image}
    // console.log(allProducts);

    return(
        <div className="container mx-auto p-10">
            <h1 className="text-2xl font-bold mb-4 text-center text-green-500">SPORT EQUIPMENT</h1>
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