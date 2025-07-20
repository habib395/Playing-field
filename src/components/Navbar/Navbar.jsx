import { useEffect, useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import { GiAmericanFootballPlayer } from "react-icons/gi"
import { FaBars, FaTimes } from "react-icons/fa"
import "./Navbar.css"

const Navbar = () => {
  const { user, handleLogOut } = useContext(AuthContext)

  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme")
    return storedTheme === "dark"
  })

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode(prev => !prev)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev)
  }

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white shadow-md'>
      <div className='w-11/12 mx-auto flex items-center justify-between py-4'>
        {/* Logo */}
        <div className='flex items-center gap-2 text-green-500 font-bold text-xl md:text-3xl'>
          <GiAmericanFootballPlayer className='hidden md:block text-3xl' />
          <p>FIELD</p>
        </div>

        {/* Hamburger (Mobile Only) */}
        <div className='md:hidden'>
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Links + Auth + Theme (Desktop) */}
        <div className='hidden md:flex items-center gap-6'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/allSport">All Sports Equipment</NavLink>
          <NavLink to="/addEquipment">Add Equipment</NavLink>
          <NavLink to={`/equipment/${user?.email}`}>My Equipment List</NavLink>

          <button onClick={toggleTheme} className="btn btn-sm bg-transparent">
            {darkMode ? '☀️' : '🌙'}
          </button>

          {
            user?.email ? (
              <div className='flex items-center gap-3'>
                <div className='relative group'>
                  <img className='w-8 h-8 rounded-full object-cover hover:opacity-75' src={user.photoURL} alt="User" />
                  <span className='absolute bottom-4 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    {user.displayName}
                  </span>
                </div>
                <button className='btn btn-sm bg-green-500' onClick={handleLogOut}>Logout</button>
              </div>
            ) : (
              <div className='flex gap-2'>
                <NavLink to="/login">
                  <button className='btn btn-sm bg-green-500'>Login</button>
                </NavLink>
                <NavLink to="/register">
                  <button className='btn btn-sm bg-green-500'>Register</button>
                </NavLink>
              </div>
            )
          }
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className='md:hidden w-11/12 mx-auto flex flex-col gap-3 pb-4'>
          <NavLink to="/" className='font-semibold' onClick={toggleMobileMenu}>Home</NavLink>
          <NavLink to="/allSport" className='font-semibold' onClick={toggleMobileMenu}>All Sports Equipment</NavLink>
          <NavLink to="/addEquipment" className='font-semibold' onClick={toggleMobileMenu}>Add Equipment</NavLink>
          <NavLink to={`/equipment/${user?.email}`} className='font-semibold' onClick={toggleMobileMenu}>My Equipment List</NavLink>

          <button onClick={toggleTheme} className="btn btn-sm w-max bg-transparent">
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>

          {
            user?.email ? (
              <div className='flex items-center gap-3'>
                <img className='w-8 h-8 rounded-full object-cover' src={user.photoURL} alt="User" />
                <span>{user.displayName}</span>
                <button className='btn btn-sm bg-green-500 outline-none' onClick={handleLogOut}>Logout</button>
              </div>
            ) : (
              <div className='flex gap-2'>
                <NavLink to="/login">
                  <button className='btn btn-sm outline-none bg-green-500'>Login</button>
                </NavLink>
                <NavLink to="/register">
                  <button className='btn btn-sm bg-green-500 outline-none'>Register</button>
                </NavLink>
              </div>
            )
          }
        </div>
      )}
    </div>
  )
}

export default Navbar
