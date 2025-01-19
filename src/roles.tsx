import React from "react";
import { UserRound, GraduationCap, Users } from "lucide-react";

// Types
export type UserRole = "employee" | "student" | "alumini" | "admin";

interface RoleSelectionProps {
  onRoleSelect: (role: UserRole) => void;
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
    color: "bg-green-500",
  },
  {
    id: "alumini",
    title: "Alumni",
    icon: Users,
    description: "Graduates and Alumni students",
    color: "bg-purple-500",
  },
  {
    id: "admin",
    title: "Admin",
    icon: UserRound,
    description: "Manage, Configure, Monitor",
    color: "bg-red-500",
  },
] as const;

const RoleSelection: React.FC<RoleSelectionProps> = ({ onRoleSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
      {roles.map((role) => {
        const Icon = role.icon;
        return (
          <button
            key={role.id}
            onClick={() => onRoleSelect(role.id as UserRole)}
            className="group relative overflow-hidden rounded-xl p-8 transition-all hover:scale-105 hover:shadow-lg bg-white"
          >
            <div
              className={`absolute inset-0 ${role.color} opacity-10 group-hover:opacity-20 transition-opacity`}
            />
            <Icon
              className={`h-12 w-12 ${role.color} text-white rounded-lg p-2 mb-4`}
            />
            <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
            <p className="text-gray-600">{role.description}</p>
          </button>
        );
      })}
    </div>
  );
};

export default RoleSelection;
