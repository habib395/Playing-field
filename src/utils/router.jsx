import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../components/MainLayout/MainLayout"
import Home from "../components/Home/Home"
import AllSport from "../components/AllSport/AllSport"
import AddEquipment from "../components/AddEquipments/AddEquipment"
import ListEquipment from "../components/ListEquipment/ListEquipment"
import Details from "../components/Details/Details"
import Login from "../Login/Login"
import Register from "../Register/Register"
import Update from "../Update/Update"

const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=> fetch("/Product.json")
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/allSport",
                element: <AllSport></AllSport>,
                loader: ()=>fetch("/AllProduct.json")
            },
            {
                path: "details/:id",
                element:<Details></Details>,
                loader: async({ params }) =>{
                    const res = await fetch("/AllProduct.json")
                    const data = await res.json()
                    const singleData = data.find(d => d.id == params.id)
                    return singleData
                }
            },
            {
                path:'/addEquipment',
                element:<AddEquipment></AddEquipment>,
            },
            {
                path: '/update',
                element:<Update></Update>
            },
            {
                path:'/listEquipment',
                element:<ListEquipment></ListEquipment>
            }
        ]
    },
    {
        path: "*",
        element: <div className="w-1/2 font-bold mx-auto text-black text-3xl text-center bg-green-200 my-10 py-10 rounded-full opacity-90">Page not Found <br />
        <a href="/" className="text-blue-500 underline mt-4 block">Go back to Home</a>
        </div>
    }
])
export default router