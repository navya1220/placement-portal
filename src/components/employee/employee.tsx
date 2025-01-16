import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { IoArrowBack } from "react-icons/io5"; // Back arrow icon
import Navbar from "../Navbar";

const Employee = () => {
  const [company, setCompany] = useState("");
  const [year, setYear] = useState("");
  const [link, setLink] = useState("");
  const [logo, setLogo] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await axios.post("https://placement-portal-backend-e74c.onrender.com/api/paper", {
        company,
        year,
        link,
        logo,
      });
      setLoading(false);
      setSuccessMessage("Paper added successfully!");
      setCompany("");
      setYear("");
      setLink("");
      setLogo("");
    } catch (err) {
      setLoading(false);
      setErrorMessage("Failed to add paper. Please try again.");
    }
  };

  const handleCardClick = () => {
    setShowForm(true); 
  };

  const handleBackClick = () => {
    setShowForm(false); 
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      <main className="pt-20">
        {/* Card that triggers the form */}
        {!showForm && (
          <div
            onClick={handleCardClick}
            className="cursor-pointer bg-blue-500 text-white p-6 rounded-lg shadow-lg max-w-md mx-auto transform transition-transform hover:scale-105"
          >
            <motion.h2
              className="text-2xl font-bold text-center text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Add Company Paper
            </motion.h2>
            <p className="text-center mt-4 text-white text-lg">
              Click to add paper details for your company.
            </p>
          </div>
        )}

        {/* Show form when clicked */}
        {showForm && (
          <div className="container mx-auto px-4 py-8">
            <motion.div
              className="bg-white shadow-lg rounded-lg p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Back button with arrow */}
              <div className="flex items-center mb-6">
                <button
                  onClick={handleBackClick}
                  className="text-gray-700 hover:text-gray-900 transition-transform transform hover:scale-110"
                >
                  <IoArrowBack size={24} />
                </button>
                <h2 className="text-2xl font-semibold text-center ml-4">Add Company Paper</h2>
              </div>

              {successMessage && (
                <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4">
                  {successMessage}
                </div>
              )}
              {errorMessage && (
                <div className="bg-red-100 text-red-800 p-4 rounded-lg mb-4">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="company" className="block text-gray-700">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="year" className="block text-gray-700">Year</label>
                  <input
                    type="number"
                    id="year"
                    name="year"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="link" className="block text-gray-700">Paper Link</label>
                  <input
                    type="url"
                    id="link"
                    name="link"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="logo" className="block text-gray-700">Company Logo URL</label>
                  <input
                    type="url"
                    id="logo"
                    name="logo"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={logo}
                    onChange={(e) => setLogo(e.target.value)}
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                  disabled={loading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {loading ? "Submitting..." : "Add Paper"}
                </motion.button>
              </form>
            </motion.div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Employee;
