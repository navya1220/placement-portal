import React, { useState } from "react";
import { Mail, User, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

export type UserRole = "employee" | "student" | "alumini" | "admin";

const Signup: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [role, setRole] = useState<UserRole>("student");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      let endpoint = "";
      let payload = {};

      switch (role) {
        case "student":
          endpoint =
            "https://placement-portal-backend-e74c.onrender.com/api/studentRegister";
          payload = { name, email, rollNo };
          break;
        case "alumini":
          endpoint =
            "https://placement-portal-backend-e74c.onrender.com/api/aluminiRegister";
          payload = { name, email, rollNo };
          break;
        case "employee":
          endpoint =
            "https://placement-portal-backend-e74c.onrender.com/api/register";
          payload = { name, email, password };
          break;
        case "admin":
          endpoint =
            "https://placement-portal-backend-e74c.onrender.com/api/adminRegister";
          payload = { name, email, password };
          break;
        default:
          throw new Error("Invalid role selected.");
      }

      await axios.post(endpoint, payload);
      navigate("/login");
    } catch (err: any) {
      setError(err.response?.data?.message || "Signup failed. Try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-500 to-indigo-500">
      <motion.div
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
        <form onSubmit={handleSignup} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300"
                placeholder="John Doe"
                required
              />
            </div>
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          {/* Password Input (for roles requiring it) */}
          {role !== "student" && role !== "alumini" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>
          )}

          {/* Roll Number Input (for student/alumini roles) */}
          {(role === "student" || role === "alumini") && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Roll Number
              </label>
              <input
                type="text"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
                className="w-full pl-4 py-2 rounded-lg border border-gray-300"
                placeholder="Roll Number"
                required
              />
            </div>
          )}

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Role Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Role
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as UserRole)}
              className="w-full pl-3 pr-4 py-2 rounded-lg border border-gray-300"
            >
              <option value="student">Student</option>
              <option value="alumini">Alumini</option>
              <option value="employee">Employee</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700"
          >
            Sign Up
          </button>
        </form>

        {/* Navigation to Login */}
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <button
            className="text-purple-500 underline"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
