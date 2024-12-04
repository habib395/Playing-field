
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () =>{
    return (
        <div className="min-h-20 text-white bg-green-400 flex justify-between items-center">
            <div>
               <h2 className="text-2xl font-bold ml-4">FIELD</h2>
            </div>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/allSport" className='ml-4'>All Sports Equipment</NavLink>
                <NavLink to="/addEquipment" className='ml-4'>Add Equipment</NavLink>
                <NavLink to="/listEquipment" className='ml-4'>List My Equipment List</NavLink>
            </div>
            <div className="mr-4">
                <button className="btn btn-success mr-2">Login</button>
                <button className="btn btn-success">Register</button>
            </div>
        </div>
    )
}
export default Navbar