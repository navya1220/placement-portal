import React, { useState } from "react";
import { LogOut, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import App from "./App";
import EmployeeApp from "./components/employee/employee";
import Alumini from "./components/alumini/alumini";
import axios from "axios";
import RoleSelection from "./rolepage";
import Admin from "./components/admin/admin";

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
      className="max-w-md w-full mx-auto bg-white p-8 rounded-lg shadow-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={onBack}
        className="mb-6 flex items-center text-gray-600 hover:text-gray-900"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to roles
      </button>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>
          <p className="text-gray-600 mt-2">
            {isLogin ? "Sign in to your account" : `Sign up as a ${role}`}
          </p>
        </div>

        {!isLogin && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="John Doe"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="you@example.com"
          />
        </div>

        {(role === "employee" || role === "admin") && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>
        )}

        {(role === "student" || role === "alumini") && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Roll Number
            </label>
            <input
              type="text"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your roll number"
            />
          </div>
        )}

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-colors"
        >
          {isLogin ? "Sign In" : "Create Account"}
        </button>

        <p className="text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={onToggleMode}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            {isLogin ? "Sign up" : "Sign in"}
          </button>
        </p>
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
      return <Admin />;
    } else {
      console.error("Unexpected role:", user.role);
    }
  }
  

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {authState.view === "roles" && (
        <RoleSelection onRoleSelect={handleRoleSelect} />
      )}
      {(authState.view === "login" || authState.view === "signup") && (
        <AuthForm
          role={authState.selectedRole!}
          isLogin={authState.view === "login"}
          onBack={handleBack}
          onToggleMode={handleToggleMode}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </motion.div>
  );
}

export default Creditinal;
