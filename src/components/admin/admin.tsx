import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

interface AddJobProps {
  setResponseMessage: React.Dispatch<React.SetStateAction<string>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}

export default function AddJob({ setResponseMessage, setErrorMessage }: AddJobProps) {
  const [jobData, setJobData] = useState({
    title: '',
    company: '',
    location: '',
    salary: '',
    type: 'Full-time',
    description: '',
    requirements: '',
    technologies: '',
    experience: '',
    postedDate: '',
    companyLogo: '',
  });

  const navigate = useNavigate();

  const handleJobInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  const handleJobSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const formattedJobData = {
      ...jobData,
      requirements: jobData.requirements.split(',').map((item) => item.trim()),
      technologies: jobData.technologies.split(',').map((item) => item.trim()),
    };
  
    try {
      const response = await axios.post(
        'https://placement-portal-backend-e74c.onrender.com/api/jobs',
        formattedJobData
      );
  
      if (response.status === 201) {
        setResponseMessage?.('Job added successfully!');
        setErrorMessage?.('');
        setJobData({
          title: '',
          company: '',
          location: '',
          salary: '',
          type: 'Full-time',
          description: '',
          requirements: '',
          technologies: '',
          experience: '',
          postedDate: '',
          companyLogo: '',
        });
        navigate('/admin');
      }
    } catch (error) {
      console.error('Error adding job:', error);
      setResponseMessage?.('');
      setErrorMessage?.('Failed to add job. Please try again.');
    }
  };
  


  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.4, ease: 'easeInOut' }}
    className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50"
  >
    <form
      onSubmit={handleJobSubmit}
      className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg max-h-[80vh] overflow-y-auto border border-gray-300 relative"
    >
      <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">Add New Job</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="title">
            Job Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={jobData.title}
            onChange={handleJobInputChange}
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="company">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={jobData.company}
            onChange={handleJobInputChange}
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={jobData.location}
              onChange={handleJobInputChange}
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="salary">
              Salary
            </label>
            <input
              type="text"
              id="salary"
              name="salary"
              value={jobData.salary}
              onChange={handleJobInputChange}
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="type">
            Job Type
          </label>
          <select
            id="type"
            name="type"
            value={jobData.type}
            onChange={handleJobInputChange}
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          >
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="description">
            Job Description
          </label>
          <textarea
            id="description"
            name="description"
            value={jobData.description}
            onChange={handleJobInputChange}
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="requirements">
              Requirements (comma-separated)
            </label>
            <input
              type="text"
              id="requirements"
              name="requirements"
              value={jobData.requirements}
              onChange={handleJobInputChange}
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="technologies">
              Technologies (comma-separated)
            </label>
            <input
              type="text"
              id="technologies"
              name="technologies"
              value={jobData.technologies}
              onChange={handleJobInputChange}
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="experience">
            Experience
          </label>
          <input
            type="text"
            id="experience"
            name="experience"
            value={jobData.experience}
            onChange={handleJobInputChange}
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="postedDate">
            Posted Date
          </label>
          <input
            type="date"
            id="postedDate"
            name="postedDate"
            value={jobData.postedDate}
            onChange={handleJobInputChange}
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="companyLogo">
            Company Logo URL
          </label>
          <input
            type="text"
            id="companyLogo"
            name="companyLogo"
            value={jobData.companyLogo}
            onChange={handleJobInputChange}
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="flex justify-end mt-6 space-x-4">
      <button
        type="submit"
        className="bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Submit
      </button>
      <button
        type="button"
        onClick={() => navigate('/admin')}
        className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg shadow hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
      >
        Cancel
      </button>
    </div>
  </form>
</motion.div>
  );
}
  

