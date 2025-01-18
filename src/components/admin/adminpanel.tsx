import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { PlusCircle, Building, Users, FileText, Settings } from 'lucide-react';
import AdminNavbar from "./adminNavbar";

const AdminPanel = () => {
  const navigate = useNavigate();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cards = [
    { title: "Add Job", icon: PlusCircle, color: "blue", route: "/admin/add-job" },
    { title: "Add Company", icon: Building, color: "purple", route: "/admin/add-company" },
    { title: "Manage Users", icon: Users, color: "green", route: "/admin/manage-users" },
    { title: "View Reports", icon: FileText, color: "yellow", route: "/admin/reports" },
    { title: "Settings", icon: Settings, color: "red", route: "/admin/settings" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 font-sans">
      <AdminNavbar />
      <motion.div 
        className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="text-4xl font-bold text-center text-gray-800 mb-4 mt-10"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Welcome to Admin Panel
        </motion.h1>
        <motion.p 
          className="text-center text-gray-600 mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Manage jobs, companies, users, and more from this central dashboard.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => navigate(card.route)}
              className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-${card.color}-100`}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${card.color}-500 flex items-center justify-center`}>
                <card.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 text-center mb-2">{card.title}</h3>
              <p className="text-gray-500 text-center text-sm">Click to manage {card.title.toLowerCase()}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 bg-white rounded-lg shadow-md p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Quick Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-100 rounded-lg p-4">
              <p className="text-blue-800 font-semibold">Total Jobs</p>
              <p className="text-3xl font-bold">150</p>
            </div>
            <div className="bg-purple-100 rounded-lg p-4">
              <p className="text-purple-800 font-semibold">Total Companies</p>
              <p className="text-3xl font-bold">50</p>
            </div>
            <div className="bg-green-100 rounded-lg p-4">
              <p className="text-green-800 font-semibold">Active Users</p>
              <p className="text-3xl font-bold">1,234</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AdminPanel;

