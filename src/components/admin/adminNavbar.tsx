import type React from "react"
import { useState } from "react"
import { LogOut, Menu, X } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

interface AdminNavbarProps {
  onMenuClick: () => void
  isSidebarOpen: boolean
}

const AdminNavbar: React.FC<AdminNavbarProps> = ({ onMenuClick, isSidebarOpen }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/")
  }

  const handleMenuClick = () => {
    onMenuClick()
    setIsMobileMenuOpen(false)
  }

  const handleMobileMenuClose = (navigateTo: string) => {
    setIsMobileMenuOpen(false) // Close the menu
    navigate(navigateTo) // Navigate to the desired page
  }

  return (
    <>
      <nav className="bg-blue-600 text-white shadow-md px-4 py-3 fixed w-full top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <motion.button
              className="md:hidden p-2 rounded-lg text-white hover:bg-blue-700 transition-colors mr-2"
              onClick={handleMenuClick}
              aria-label="Toggle sidebar"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="https://www.static-contents.youth4work.com/university/Documents/Colleges/CollegeImages/7365058a-1c03-4bb0-8934-88aea2ae1e87.png"
                className="h-8 w-8 bg-white rounded-full"
                alt="College Logo"
              />
              <span className="text-xl font-bold hidden sm:inline">Vignan's Institute Of Engineering For Women</span>
              <span className="text-xl font-bold sm:hidden">VIEW</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/about" className="text-white hover:text-blue-200 transition-colors">
              About Us
            </Link>
            <motion.button
              onClick={handleLogout}
              className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LogOut className="w-4 h-4 mr-2 inline" />
              Logout
            </motion.button>
          </div>

          <motion.button
            className="md:hidden p-2 rounded-lg text-white hover:bg-blue-700 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-50 bg-blue-600 pt-16"
          >
            <div className="flex flex-col items-center space-y-4 p-4">
              <button
                className="absolute top-4 right-4 text-white"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
              <Link
                to="/about"
                className="text-white hover:text-blue-200 transition-colors text-lg"
                onClick={() => handleMobileMenuClose("/about")}
              >
                About Us
              </Link>
              <motion.button
                onClick={() => {
                  handleLogout()
                  setIsMobileMenuOpen(false)
                }}
                className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100 transition-colors text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LogOut className="w-5 h-5 mr-2 inline" />
                Logout
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default AdminNavbar
