import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../components/MainLayout/MainLayout"
import Home from "../components/Home/Home"
import AllSport from "../components/AllSport/AllSport"
import AddEquipment from "../components/AddEquipments/AddEquipment"
import ListEquipment from "../components/ListEquipment/ListEquipment"


const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path: "/allSport",
                element: <AllSport></AllSport>
            },
            {
                path:'/addEquipment',
                element:<AddEquipment></AddEquipment>
            },
            {
                path:'/listEquipment',
                element:<ListEquipment></ListEquipment>
            }
        ]
    }
])
export default router