import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import App from "./App";
import Cmp from "./companies.jsx";
import Rats from "./resume_ats.jsx";
import Mock from "./mock.tsx";
import Joby from "./joby.tsx";
import Chatbot from './Chat.jsx';
import CompanyPapers from "./papers.jsx";
import Ft from "./ft.tsx";
import Dsa from "./Dsa.tsx";
import Prediction from "./prediction.tsx";
import About from "./about.tsx";
import RoleSelectionPage from "./rolepage.tsx";
import Employee from "./components/employee/employee.tsx";
import AdminPanel from "./components/admin/adminpanel.tsx";
import AddJob from "./components/admin/admin.tsx";
import AddCompany from "./components/admin/company.tsx";
import Alumni from "./components/alumini/alumini.tsx";
import Signup from "./sign.tsx";
import Login from "./login.tsx";
import Dashboard from "./components/admin/Dashboard.tsx";

import "./index.css";

const AppRouter = () => {
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    console.log("Selected role:", role);
    navigate("/login", { state: { selectedRole: role } });
  };

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<RoleSelectionPage onRoleSelect={handleRoleSelect} />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/app" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/companies" element={<Cmp />} />
      <Route path="/resume-screening" element={<Rats />} />
      <Route path="/mock-tests" element={<Mock />} />
      <Route path="/jobs" element={<Joby />} />
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="/previous-papers" element={<CompanyPapers />} />
      <Route path="/future-trends" element={<Ft />} />
      <Route path="/dsa-practice" element={<Dsa />} />
      <Route path="/prediction" element={<Prediction />} />
      <Route path="/employee" element={<Employee />} />
      <Route path="/alumini" element={<Alumni />} />

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminPanel />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="add-job" element={<AddJob />} />
        <Route path="add-company" element={<AddCompany />} />
      </Route>
    </Routes>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <AppRouter />
    </Router>
  </StrictMode>
);
