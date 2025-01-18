import React, { useState } from "react";
import { LogOut, ArrowLeft, Mail, Lock, User, Hash } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import App from "./App";
import EmployeeApp from "./components/employee/employee";
import Alumini from "./components/alumini/alumini";
import axios from "axios";
import RoleSelection from "./rolepage";
import Adminpanel from "./components/admin/adminpanel";

// Types
export type UserRole = "employee" | "student" | "alumini" | "admin";

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  rollNo?: string;
  createdAt: string;
}

export interface AuthState {
  view: "roles" | "login" | "signup";
  selectedRole: UserRole | null;
}

const roleLabels: Record<UserRole, string> = {
  employee: 'Employee',
  student: 'Student',
  alumini: 'Alumni',
  admin: 'Admin'
};

interface AuthFormProps {
  role: UserRole;
  isLogin: boolean;
  onBack: () => void;
  onToggleMode: () => void;
  onLoginSuccess: (user: User) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({
  role,
  isLogin,
  onBack,
  onToggleMode,
  onLoginSuccess,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      let endpoint = "";
      let payload = {};

      if (isLogin) {
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
      } else {
        if (role === "student") {
          endpoint =
            "https://placement-portal-backend-e74c.onrender.com/api/studentRegister";
          payload = { name, email, rollNo };
        } else if (role === "alumini") {
          endpoint =
            "https://placement-portal-backend-e74c.onrender.com/api/aluminiRegister";
          payload = { name, email, rollNo };
        } else if (role === "employee") {
          endpoint =
            "https://placement-portal-backend-e74c.onrender.com/api/register";
          payload = { name, email, password };
        } else if (role === "admin") {
          endpoint =
            "https://placement-portal-backend-e74c.onrender.com/api/adminRegister";
          payload = { name, email, password };
        }
      }

      const response = await axios.post(endpoint, payload);
      if (isLogin) {
        const { token, ...user } = response.data;
        localStorage.setItem("token", token);
        onLoginSuccess({ ...user, role });
      } else {
        onToggleMode();
        setEmail("");
        setPassword("");
        setName("");
        setRollNo("");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <motion.div
      className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={onBack}
        className="mb-6 flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to roles
      </button>

      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-2 text-purple-700">
            Vignan's Institute of Engineering for Women
          </h1>
          <h2 className="text-2xl font-semibold text-gray-800">
            {isLogin ? "Login" : "Sign Up"}
          </h2>
          <p className="text-gray-600 mt-2 text-lg">
            {`${roleLabels[role]}`}
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isLogin && (
            <motion.div
              key="name"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                  placeholder="John Doe"
                />
              </div>
            </motion.div>
          )}

          <motion.div
            key="email"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                placeholder="you@example.com"
              />
            </div>
          </motion.div>

          {(role === "employee" || role === "admin") && (
            <motion.div
              key="password"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                  placeholder="••••••••"
                />
              </div>
            </motion.div>
          )}

          {(role === "student" || role === "alumini") && (
            <motion.div
              key="rollNo"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Roll Number
              </label>
              <div className="relative">
                <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  value={rollNo}
                  onChange={(e) => setRollNo(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                  placeholder="Enter your roll number"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {error && (
          <motion.p
            className="text-red-500 text-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {error}
          </motion.p>
        )}

        <motion.button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 transition-all duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isLogin ? "Sign In" : "Create Account"}
        </motion.button>

        <motion.p
          className="text-center text-sm text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={onToggleMode}
            className="text-purple-600 hover:text-purple-800 font-medium transition-colors duration-200"
          >
            {isLogin ? "Sign up" : "Sign in"}
          </button>
        </motion.p>
      </form>
    </motion.div>
  );
};

// Main App Component
function Creditinal() {
  const [authState, setAuthState] = useState<AuthState>({
    view: "roles",
    selectedRole: null,
  });
  const [user, setUser] = useState<User | null>(null);

  const handleRoleSelect = (role: UserRole) => {
    setAuthState({
      view: "login",
      selectedRole: role,
    });
  };

  const handleBack = () => {
    setAuthState({
      view: "roles",
      selectedRole: null,
    });
  };

  const handleToggleMode = () => {
    setAuthState((prevState) => ({
      ...prevState,
      view: prevState.view === "login" ? "signup" : "login",
    }));
  };

  const handleLoginSuccess = (user: User) => {
    setUser(user);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setAuthState({
      view: "roles",
      selectedRole: null,
    });
  };

  if (user) {
    console.log("User logged in:", user); 
  
    if (user.role === "student") {
      return <App />;
    } else if (user.role === "alumini") {
      return <Alumini />;
    } else if (user.role === "employee") {
      return <EmployeeApp />;
    } else if (user.role === "admin") {
      console.log("Rendering Admin component...");
      return <Adminpanel />;
    } else {
      console.error("Unexpected role:", user.role);
    }
  }

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence mode="wait">
        {authState.view === "roles" && (
          <motion.div
            key="roles"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <RoleSelection onRoleSelect={handleRoleSelect} />
          </motion.div>
        )}
        {(authState.view === "login" || authState.view === "signup") && (
          <motion.div
            key="auth-form"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <AuthForm
              role={authState.selectedRole!}
              isLogin={authState.view === "login"}
              onBack={handleBack}
              onToggleMode={handleToggleMode}
              onLoginSuccess={handleLoginSuccess}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Creditinal;

