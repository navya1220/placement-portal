import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Navbar';

const Alumni = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    story: '',
    imageUrl: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const confirmSubmit = window.confirm(
      'Are you sure you want to submit this alumni data?'
    );

    if (!confirmSubmit) {
      setMessage('Submission canceled.');
      return;
    }

    try {
      const response = await fetch('https://placement-portal-backend-e74c.onrender.com/api/alumini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Successfully added alumni!');
        setFormData({ name: '', role: '', company: '', story: '', imageUrl: '' });
      } else {
        setMessage(data.error || 'Failed to add alumni');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 font-sans">
      <Navbar />
      <motion.div
        className="max-w-3xl mx-auto py-10 mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h1 className="text-3xl font-extrabold text-indigo-700 mb-8 text-center">
          Add Alumni Details
        </h1>
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-8 rounded-xl shadow-lg border border-gray-200"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {['name', 'role', 'company', 'story', 'imageUrl'].map((field, index) => (
            <motion.div
              key={field}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <label
                htmlFor={field}
                className="block font-semibold text-gray-700 capitalize"
              >
                {field === 'imageUrl' ? 'Image URL' : field}
              </label>
              {field === 'story' ? (
                <textarea
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                  rows="4"
                  placeholder={`Enter ${field}`}
                  required
                />
              ) : (
                <input
                  type={field === 'imageUrl' ? 'url' : 'text'}
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                  placeholder={`Enter ${field}`}
                  required
                />
              )}
            </motion.div>
          ))}
          <motion.button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </motion.form>
        {message && (
          <motion.p
            className="mt-6 text-center text-green-600 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {message}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default Alumni;
