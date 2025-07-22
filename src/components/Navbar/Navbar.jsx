import { useEffect, useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import { GiAmericanFootballPlayer } from "react-icons/gi"
import { FaBars, FaTimes } from "react-icons/fa"

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

  const toggleTheme = () => setDarkMode(prev => !prev)
  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev)

  return (
    <header className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <NavLink to="/" className="flex items-center gap-2 font-bold text-xl md:text-3xl text-blue-600">
          <GiAmericanFootballPlayer className="text-3xl" />
          <span>FIELD</span>
        </NavLink>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <NavLink to="/" className="hover:text-blue-500">Home</NavLink>
          <NavLink to="/allSport" className="hover:text-blue-500">All Sports Equipment</NavLink>
          <NavLink to="/addEquipment" className="hover:text-blue-500">Add Equipment</NavLink>
          <NavLink to={`/equipment/${user?.email}`} className="hover:text-blue-500">My Equipment List</NavLink>

          <button onClick={toggleTheme} className="ml-2 text-lg">
            {darkMode ? '☀️' : '🌙'}
          </button>

          {user ? (
            <div className="flex items-center gap-3">
              <div className="relative group">
                <img className="w-8 h-8 rounded-full object-cover" src={user.photoURL} alt="User" />
                <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                  {user.displayName}
                </span>
              </div>
              <button onClick={handleLogOut} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Logout</button>
            </div>
          ) : (
            <div className="flex gap-2">
              <NavLink to="/login" className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Login</NavLink>
              <NavLink to="/register" className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Register</NavLink>
            </div>
          )}
        </nav>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 text-center py-4 space-y-2">
          <NavLink to="/" onClick={toggleMobileMenu} className="block font-semibold hover:text-blue-500">Home</NavLink>
          <NavLink to="/allSport" onClick={toggleMobileMenu} className="block font-semibold hover:text-blue-500">All Sports Equipment</NavLink>
          <NavLink to="/addEquipment" onClick={toggleMobileMenu} className="block font-semibold hover:text-blue-500">Add Equipment</NavLink>
          <NavLink to={`/equipment/${user?.email}`} onClick={toggleMobileMenu} className="block font-semibold hover:text-blue-500">My Equipment List</NavLink>

          <button onClick={toggleTheme} className="text-lg">
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>

          {user ? (
            <div className="flex flex-col items-center gap-2">
              <img className="w-10 h-10 rounded-full object-cover" src={user.photoURL} alt="User" />
              <span>{user.displayName}</span>
              <button onClick={handleLogOut} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Logout</button>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <NavLink to="/login" className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Login</NavLink>
              <NavLink to="/register" className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Register</NavLink>
            </div>
          )}
        </div>
      )}
    </header>
  )
}

export default Navbar
