import type React from "react"
import { UserRound, GraduationCap, Users, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

export type UserRole = "employee" | "student" | "alumini" | "admin"

interface RoleSelectionProps {
  onRoleSelect: (role: UserRole) => void
}

const roles = [
  {
    id: "employee",
    title: "Employee",
    icon: UserRound,
    description: "School staff and teachers",
    color: "bg-blue-500",
  },
  {
    id: "student",
    title: "Student",
    icon: GraduationCap,
    description: "Current students",
    color: "bg-blue-400",
  },
  {
    id: "alumini",
    title: "Alumni",
    icon: Users,
    description: "Graduates and Alumni students",
    color: "bg-blue-300",
  },
  {
    id: "admin",
    title: "Admin",
    icon: ShieldCheck,
    description: "Manage, Configure, Monitor",
    color: "bg-blue-600",
  },
]

const RoleSelection: React.FC<RoleSelectionProps> = ({ onRoleSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {roles.map((role, index) => {
        const Icon = role.icon
        return (
          <motion.button
            key={role.id}
            onClick={() => onRoleSelect(role.id as UserRole)}
            className="group relative overflow-hidden rounded-xl p-8 transition-all hover:scale-105 hover:shadow-2xl bg-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <motion.div
              className={`absolute inset-0 ${role.color} opacity-10 group-hover:opacity-20 transition-opacity`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
              <Icon className={`h-16 w-16 ${role.color} text-white rounded-full p-3 mb-4 mx-auto`} />
            </motion.div>
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">{role.title}</h3>
            <p className="text-gray-600">{role.description}</p>
          </motion.button>
        )
      })}
    </div>
  )
}

export default RoleSelection

