import type React from "react"
import { motion } from "framer-motion"

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-blue-500 to-blue-600 py-6 px-4 shadow-lg"
    >
      <div className="container mx-auto flex flex-col items-center justify-center">
        <motion.img
          src="https://www.static-contents.youth4work.com/university/Documents/Colleges/CollegeImages/7365058a-1c03-4bb0-8934-88aea2ae1e87.png"
          className="h-20 w-20 mb-4 rounded-full border-4 border-white shadow-md"
          alt="College Logo"
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.5 }}
        />
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Vignan's Institute Of Engineering For Women
        </motion.h1>
        <motion.div
          className="mt-2 bg-white h-1 w-24"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
      </div>
    </motion.header>
  )
}

export default Header

