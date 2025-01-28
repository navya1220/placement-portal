import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Company = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    logo: "",
    process: "",
    requirements: "",
    category: "MNC",
    recruitmentLink: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://placement-portal-backend-e74c.onrender.com/api/company",
        formData
      );
      setResponseMessage(response.data.message);
      setErrorMessage("");
      setFormData({
        name: "",
        logo: "",
        process: "",
        requirements: "",
        category: "MNC",
        recruitmentLink: "",
      });
      setShowForm(false);
    } catch (error) {
      setResponseMessage("");
      setErrorMessage(
        error.response?.data?.error || "Failed to add company."
      );
    }
  };

  const handleCancel = () => {
    navigate("/admin");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-80 bg-light">
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="card shadow rounded p-4"
            style={{
              width: "95%",
              maxWidth: "600px",
              height: "auto", 
              backgroundColor: "#fff",
              minHeight: "00px", 
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-center mb-4 text-primary">Add Company</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Company Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter company name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="logo" className="form-label">
                  Logo URL
                </label>
                <input
                  type="text"
                  id="logo"
                  name="logo"
                  value={formData.logo}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter logo URL"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="process" className="form-label">
                  Recruitment Process
                </label>
                <textarea
                  id="process"
                  name="process"
                  value={formData.process}
                  onChange={handleInputChange}
                  className="form-control"
                  rows="2"
                  placeholder="Enter recruitment process"
                  required
                ></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="requirements" className="form-label">
                  Requirements
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  className="form-control"
                  rows="2"
                  placeholder="Enter requirements"
                  required
                ></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="form-select"
                  required
                >
                  <option value="MNC">MNC</option>
                  <option value="Middle">Middle</option>
                  <option value="Startup">Startup</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="recruitmentLink" className="form-label">
                  Recruitment Link
                </label>
                <input
                  type="text"
                  id="recruitmentLink"
                  name="recruitmentLink"
                  value={formData.recruitmentLink}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter recruitment link"
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="btn btn-primary w-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Add Company
              </motion.button>

              <motion.button
                type="button"
                className="btn btn-secondary w-100 mt-3"
                onClick={handleCancel}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Cancel
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Response Messages */}
      {responseMessage && (
        <motion.div
          className="alert alert-success position-fixed bottom-0 end-0 m-3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
        >
          {responseMessage}
        </motion.div>
      )}
      {errorMessage && (
        <motion.div
          className="alert alert-danger position-fixed bottom-0 end-0 m-3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
        >
          {errorMessage}
        </motion.div>
      )}
    </div>
  );
};

export default Company;
