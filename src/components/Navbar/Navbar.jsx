
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import { useContext } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import { GiAmericanFootballPlayer } from "react-icons/gi";

const Navbar = () =>{
    const { user, handleLogOut } = useContext(AuthContext) 

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen)
    }
    return (
        <div className='bg-base-200'>
            <div className='w-11/12 mx-auto min-h-20 sm:flex flex-cols justify-between items-center'>
            <div className='sm:flex sm: font-bold text-center items-center text-sm md:text-3xl text-green-500'>
                <div className='text-3xl hidden md:block'>
                <GiAmericanFootballPlayer />
                </div>
                <p className='text-xl font-bold py-2 sm:py-5'>FIELD</p>
            </div>
            <div className='text-center'>
                <NavLink to="/" className='block sm:inline-block py-1 sm:py-0 sm:font-bold ml-4'>Home</NavLink>
                <NavLink to="/allSport" className=' block sm:inline-block py-1 sm:py-0 ml-4 sm:font-bold'>All Sports Equipment</NavLink>
                <NavLink to="/addEquipment" className='block sm:inline-block py-1 sm:py-0 ml-4 sm:font-bold'>Add Equipment</NavLink>
                <NavLink to={`/equipment/${user?.email}`} className='block sm:inline-block py-1 sm:py-0 ml-4 sm:font-bold'>My Equipment List</NavLink>
            </div>
            <div className='flex justify-center'>
                {
                    user?.email ? (
                        <div className='flex items-center justify-between gap-3 py-2'>
                            <div className='relative group flex gap-3'>
                                <img className='w-6 h-6 sm:w-12 sm:h-12 rounded-full object-cover hover:opacity-75' src={user.photoURL} alt="" />
                                <span className='absolute bottom-4 left-1/2 translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                {user.displayName}
                                </span>
                                <button className='btn btn-sm bg-green-500' onClick={handleLogOut}>Logout</button>
                            </div>
                            </div>
                            ) : (
                                <div className='flex'>
                                    <NavLink to="/login">
                                <button className='btn btn-sm bg-green-500 mr-2'>
                                    Login
                                </button>
                                </NavLink>
                                    <NavLink to="/register">
                                <button className='btn btn-sm bg-green-500'>
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

