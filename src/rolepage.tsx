import type React from "react"
import { useNavigate } from "react-router-dom"
import RoleSelection, { type UserRole } from "./roles"
import Header from "./Header"
import { motion } from "framer-motion"

const RoleSelectionPage: React.FC<{ onRoleSelect: (role: UserRole) => void }> = ({ onRoleSelect }) => {
  const navigate = useNavigate()

  const handleRoleSelect = (role: UserRole) => {
    onRoleSelect(role)
    navigate("/signup")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="text-center mb-12">
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl font-bold text-blue-600 mb-4"
          >
            Placement Portal
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl text-blue-500"
          >
            Choose your role to continue
          </motion.p>
        </div>
        <RoleSelection onRoleSelect={handleRoleSelect} />
      </motion.div>
    </div>
  )
}

export default RoleSelectionPage

