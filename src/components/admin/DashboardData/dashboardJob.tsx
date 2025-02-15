import React, { useState, useEffect } from 'react';
import { Briefcase, MapPin, Building2, Edit, Trash } from 'lucide-react';
import { motion } from 'framer-motion';

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  description: string;
  requirements: string[];
  technologies: string[];
  experience: string;
  postedDate: string;
  companyLogo: string;
}

export const useJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  const fetchJobs = async () => {
    try {
      const response = await fetch('https://placement-portal-backend-e74c.onrender.com/api/jobs');
      if (!response.ok) {
        throw new Error('Failed to fetch jobs');
      }
      const data = await response.json();
      
      const mappedData = data.map((job: any) => ({
        ...job,
        id: job._id,
      }));
      
      setJobs(mappedData);  
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };
  

  const deleteJob = async (jobId: string) => {
    try {
      const response = await fetch(`https://placement-portal-backend-e74c.onrender.com/api/jobs/${jobId}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        const errorMessage = await response.text();
        console.error('Failed to delete job:', errorMessage);
      } else {
        setJobs((prevJobs) => prevJobs.filter((job) => job.id !== jobId));
      }
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };
  
  const updateJob = async (updatedJob: Job) => {
    try {
      const response = await fetch(`https://placement-portal-backend-e74c.onrender.com/api/jobs/${updatedJob.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedJob),
      });
      if (response.ok) {
        const updatedJobs = await response.json();
        setJobs((prevJobs) =>
          prevJobs.map((job) => (job.id === updatedJobs.id ? updatedJobs : job))
        );
      } else {
        console.error('Failed to update job');
      }
    } catch (error) {
      console.error('Error updating job:', error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return { jobs, deleteJob, updateJob };
};

export const JobCard: React.FC<{ job: Job; onDelete: (id: string) => void; onUpdate: (job: Job) => void }> = ({
    job,
    onDelete,
    onUpdate,
  }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedJob, setEditedJob] = useState<Job>(job);
  
    const handleEdit = () => {
      setIsEditing(true);
    };
  
    const handleUpdate = () => {
      onUpdate(editedJob); 
      setIsEditing(false);
    };
  
    return (
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow"
      >
        {isEditing ? (
          <div className="space-y-4">
            <input
              type="text"
              value={editedJob.title}
              onChange={(e) => setEditedJob({ ...editedJob, title: e.target.value })}
              className="w-full p-2 border rounded-lg"
              placeholder="Job Title"
            />
            <textarea
              value={editedJob.description}
              onChange={(e) => setEditedJob({ ...editedJob, description: e.target.value })}
              className="w-full p-2 border rounded-lg"
              placeholder="Job Description"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-start gap-4">
              <img
                src={job.companyLogo}
                alt={job.company}
                className="w-16 h-20 rounded-lg object-cover"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold text-indigo-700 truncate">{job.title}</h3>
                <div className="flex flex-wrap items-center gap-2 mt-2 text-gray-600">
                  <div className="flex items-center gap-1">
                    <Building2 className="w-4 h-4 text-indigo-500" />
                    <span className="truncate">{job.company}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-indigo-500" />
                    <span className="truncate">{job.location}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-4 gap-2">
              <button
                onClick={handleEdit}
                className="flex items-center gap-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                <Edit className="w-4 h-4" />
                Edit
              </button>
              <button
  onClick={() => {
    if (job.id) {
      console.log('Deleting job with ID:', job.id);  // Ensure id is logged
      onDelete(job.id);  // Pass the correct job id to the delete function
    } else {
      console.error('Job ID is missing');
    }
  }}
  className="flex items-center gap-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
>
  <Trash className="w-4 h-4" />
  Delete
</button>

            </div>
          </div>
        )}
      </motion.div>
    );
  };
  