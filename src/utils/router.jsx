import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../components/MainLayout/MainLayout"
import Home from "../components/Home/Home"
import AllSport from "../components/AllSport/AllSport"
import AddEquipment from "../components/AddEquipments/AddEquipment"
import ListEquipment from "../components/ListEquipment/ListEquipment"
import Details from "../components/Details/Details"

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
                path:'/listEquipment',
                element:<ListEquipment></ListEquipment>
            }
        ]
    }
])
export default router