"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  PlusCircle,
  Building,
  Users,
  FileText,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import AdminNavbar from "./adminNavbar";

const AdminPanel: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
      setIsSidebarOpen(!isMobileView);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const sidebarVariants = {
    open: {
      x: 0,
      width: isMobile ? "100%" : "16rem",
      transition: { duration: 0.3 },
    },
    closed: {
      x: isMobile ? "-100%" : 0,
      width: isMobile ? "100%" : "4rem",
      transition: { duration: 0.3 },
    },
  };

  const navItems = [
    { to: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { to: "add-job", icon: PlusCircle, label: "Add Job" },
    { to: "add-company", icon: Building, label: "Add Company" },
    { to: "manage-users", icon: Users, label: "Manage Users" },
    { to: "reports", icon: FileText, label: "View Reports" },
    { to: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <div className="flex flex-col h-screen">
      <AdminNavbar onMenuClick={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div className="flex flex-1 overflow-hidden pt-16">
        <motion.aside
          className={`bg-white border-r border-gray-200 flex flex-col ${
            isMobile ? "fixed inset-y-0 left-0 z-50" : "relative"
          }`}
          variants={sidebarVariants}
          initial="closed"
          animate={isSidebarOpen ? "open" : "closed"}
        >
          <div className="p-4 flex justify-between items-center">
            <AnimatePresence>
              {(isSidebarOpen || !isMobile) && (
                <motion.h2
                  className="text-xl font-semibold text-blue-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {isSidebarOpen && "Admin Panel"}
                </motion.h2>
              )}
            </AnimatePresence>
            <motion.button
              onClick={toggleSidebar}
              className="p-2 bg-white border border-gray-200 rounded-md text-blue-600 hover:bg-blue-50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
            </motion.button>
          </div>
          <nav className="mt-6 flex-1 overflow-y-auto">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center p-4 text-gray-700 ${
                    isActive ? "bg-blue-100 text-blue-600" : "hover:bg-blue-50"
                  }`
                }
                onClick={() => isMobile && setIsSidebarOpen(false)}
              >
                <item.icon className="w-5 h-5 mr-3" />
                <AnimatePresence>
                  {(isSidebarOpen || isMobile) && (
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </NavLink>
            ))}
          </nav>
        </motion.aside>

        <main className="flex-1 bg-gray-50 overflow-y-auto">
          <div className="p-6">
            <Outlet />
          </div>
        </main>

        {isMobile && isSidebarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsSidebarOpen(false)} />
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
