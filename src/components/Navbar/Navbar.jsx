
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import { useContext } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import { GiAmericanFootballPlayer } from "react-icons/gi";

const Navbar = () =>{
    const { user, handleLogOut } = useContext(AuthContext) 
    // console.log(user);
    return (
        <div className='bg-base-200'>
            <div className='w-11/12 mx-auto min-h-20 sm:flex flex-cols justify-between items-center'>
            <div className='sm:flex sm: font-bold text-center items-center text-sm md:text-3xl text-green-500'>
                <div className='hidden md:block'>
                <GiAmericanFootballPlayer />
                </div>
                <p className='font-bold py-5'>FIELD</p>
            </div>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/allSport" className='ml-4'>All Sports Equipment</NavLink>
                <NavLink to="/addEquipment" className='ml-4'>Add Equipment</NavLink>
                <NavLink to="/listEquipment" className='ml-4'>List My Equipment List</NavLink>
            </div>
            <div className='flex'>
                {
                    user?.email ? (
                        <div className='flex justify-between gap-3 py-2'>
                            <div className='relative group flex gap-3'>
                                <img className='w-12 h-12 rounded-full object-cover hover:opacity-75' src={user.photoURL} alt="" />
                                <span className='absolute botton-4 left-1/2 translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                {user.displayName}
                                </span>
                                <button className='btn bg-green-500' onClick={handleLogOut}>Logout</button>
                            </div>
                            </div>
                            ) : (
                                <div>
                                    <NavLink to="/login">
                                <button className='btn bg-green-500 mr-2'>
                                    Login
                                </button>
                                </NavLink>
                                    <NavLink to="/register">
                                <button className='btn bg-green-500'>
                                    Register
                                </button>
                                </NavLink>
                                </div>
                            )}
                    </div>
            </div>
        </div>
    )
}

export default Navbar


{/* <div className="min-h-20 text-white bg-green-400 flex justify-between items-center">
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
        </div> */}