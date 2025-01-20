import React, { useState } from "react";
import { Mail, Lock, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

export type UserRole = "employee" | "student" | "alumini" | "admin";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [role, setRole] = useState<UserRole>("student");
  const [error, setError] = useState("");
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      let endpoint = "";
      let payload = {};

      if (role === "student") {
        endpoint =
          "https://placement-portal-backend-e74c.onrender.com/api/studentLogin";
        payload = { email, rollNo };
      } else if (role === "alumini") {
        endpoint =
          "https://placement-portal-backend-e74c.onrender.com/api/aluminiLogin";
        payload = { email, rollNo };
      } else if (role === "employee") {
        endpoint =
          "https://placement-portal-backend-e74c.onrender.com/api/login";
        payload = { email, password };
      } else if (role === "admin") {
        endpoint =
          "https://placement-portal-backend-e74c.onrender.com/api/adminLogin";
        payload = { email, password };
      }

      const response = await axios.post(endpoint, payload);
      const { token, userData } = response.data;

      localStorage.setItem("token", token);
      setUser(userData);

      // Navigate to appropriate dashboard
      if (role === "employee") navigate("/employee");
      else if (role === "student") navigate("/app");
      else if (role === "alumini") navigate("/alumini");
      else if (role === "admin") navigate("/admin");
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed. Try again.");
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
        <button
          onClick={() => navigate("/")}
          className="mb-6 flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to roles
        </button>
        <h1 className="text-3xl font-bold mb-2 text-purple-700 text-center">
          Vignan's Institute of Engineering for Women
        </h1>
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

        <form onSubmit={handleLogin} className="space-y-4">
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

          {role === "student" || role === "alumini" ? (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Roll Number
              </label>
              <input
                type="text"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
                className="w-full pl-4 py-2 rounded-lg border border-gray-300"
                placeholder="Enter your Roll Number"
                required
              />
            </div>
          ) : (
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

          {error && <p className="text-red-500 text-sm">{error}</p>}

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

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700"
          >
            Login
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
