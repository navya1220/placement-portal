import React from "react";
import { useNavigate } from "react-router-dom";
import RoleSelection, { UserRole } from "./roles";

const RoleSelectionPage: React.FC<{ onRoleSelect: (role: UserRole) => void }> = ({ onRoleSelect }) => {
  const navigate = useNavigate();

  const handleRoleSelect = (role: UserRole) => {
    onRoleSelect(role);
    navigate("/signup"); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Select Your Role</h1>
          <p className="text-xl text-gray-600">Choose your role to continue</p>
        </div>
        <RoleSelection onRoleSelect={handleRoleSelect} />
      </div>
    </div>
  );
};

export default RoleSelectionPage;
