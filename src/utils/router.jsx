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
import AllDetails from "../AllDetails/AllDetails"
import PrivateRoute from './../PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=> fetch("http://localhost:5000/addEquipment")
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
                element:<AllSport></AllSport>,
                loader: ()=>fetch("http://localhost:5000/addEquipments")
            },
            {
                path: "details/:id",
                element:<PrivateRoute>
                    <Details></Details>
                </PrivateRoute>,
                loader: async({ params }) =>{
                    const res = await fetch("http://localhost:5000/addEquipment")
                    const data = await res.json()
                    const singleData = data.find(d => d._id == params.id)
                    return singleData
                }
            },
            {
                path: "allDetails/:id",
                element:<PrivateRoute>
                    <AllDetails></AllDetails>
                </PrivateRoute>,
                loader: async({ params }) =>{
                    const res = await fetch("http://localhost:5000/addEquipments")
                    const data = await res.json()
                    const singleData = data.find(d => d._id == params.id)
                    return singleData
                }
            },
            {
                path:'/addEquipment',
                element:<PrivateRoute>
                    <AddEquipment></AddEquipment>
                </PrivateRoute>,
            },
            {
                path: '/update/:id',
                element:<Update></Update>,
                loader: ({ params }) => fetch(`http://localhost:5000/equipment/${params.email}/${params.id}`)
            },
            {
                path:'/equipment/:email',
                element:<PrivateRoute>
                    <ListEquipment></ListEquipment>
                </PrivateRoute>,
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