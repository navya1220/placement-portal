import React, { useState, useEffect } from 'react';
import { Briefcase, Menu, X, MapPin, Building2, Clock, DollarSign, Search } from 'lucide-react';
import { motion } from 'framer-motion'

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
  companyUrl: string;
  companyLogo: string;
}


export const useJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<{ [key: string]: string }>({});

  const fetchJobs = async () => {
    try {
      const response = await fetch('https://placement-portal-backend-e74c.onrender.com/api/jobs');
      if (!response.ok) {
        throw new Error('Failed to fetch jobs');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching jobs:', error);
      return [];
    }
  }

  useEffect(() => {
    async function loadJobs() {
      const fetchedJobs = await fetchJobs();
      setJobs(fetchedJobs);
    }
    loadJobs();
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesFilters = Object.entries(filters).every(([key, value]) => {
      if (!value) return true;
      return job[key as keyof Job] === value;
    });

    return matchesSearch && matchesFilters;
  });

  return {
    searchQuery,
    setSearchQuery,
    filters,
    setFilters,
    filteredJobs,
  };
};

export const Filters: React.FC<{ onFilterChange: (filters: { [key: string]: string }) => void }> = ({ onFilterChange }) => {
  const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Remote']
  const experienceLevels = ['Entry Level', '1-3 years', '3-5 years', '5+ years']

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 bg-white p-6 rounded-lg shadow-lg"
    >
      <div>
        <h3 className="text-lg font-semibold mb-3 text-indigo-700">Job Type</h3>
        <div className="space-y-2">
          {jobTypes.map((type) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="rounded text-indigo-600 focus:ring-indigo-500"
                onChange={(e) => onFilterChange({ type: e.target.checked ? type : '' })}
              />
              <span className="text-gray-700 hover:text-indigo-600 transition-colors">{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3 text-indigo-700">Experience Level</h3>
        <div className="space-y-2">
          {experienceLevels.map((level) => (
            <label key={level} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="rounded text-indigo-600 focus:ring-indigo-500"
                onChange={(e) => onFilterChange({ experience: e.target.checked ? level : '' })}
              />
              <span className="text-gray-700 hover:text-indigo-600 transition-colors">{level}</span>
            </label>
          ))}
        </div>
      </div>
    </motion.div>
  )
}


export const Header: React.FC<{ isFilterOpen: boolean; onToggleFilters: () => void }> = ({ isFilterOpen, onToggleFilters }) => (
  <motion.header
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ type: 'spring', stiffness: 100 }}
    className="bg-white shadow-sm sticky top-0 z-20"
  >
    <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Briefcase className="w-8 h-8 text-indigo-600" />
          <h1 className="text-2xl font-bold text-gray-900">CareerConnect</h1>
        </div>
        <button
          onClick={onToggleFilters}
          className="lg:hidden p-2 hover:bg-indigo-100 rounded-lg transition-colors"
          aria-label="Toggle filters"
        >
          {isFilterOpen ? <X className="w-6 h-6 text-indigo-600" /> : <Menu className="w-6 h-6 text-indigo-600" />}
        </button>
      </div>
    </div>
  </motion.header>
)

export const JobCard: React.FC<{ job: Job; onClick: (job: Job) => void }> = ({ job, onClick }) => (
  <motion.div 
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow cursor-pointer"
    onClick={() => onClick(job)}
  >
 <div className="flex flex-col sm:flex-row items-start gap-4">
      <img 
        src={job.companyLogo} 
        alt={job.company}
        className="w-16 h-20 rounded-lg object-cover"
      />
      <div className="flex-1 min-w-0">
        <h3 className="text-lg sm:text-xl font-semibold text-indigo-700 truncate">{job.title}</h3>
        <div className="flex flex-wrap items-center gap-2 mt-2 text-gray-600">
          <div className="flex items-center gap-1">
            <Building2 className="w-4 h-4 flex-shrink-0 text-indigo-500" />
            <span className="truncate">{job.company}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 flex-shrink-0 text-indigo-500" />
            <span className="truncate">{job.location}</span>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
)

export const JobDetails: React.FC<{ job: Job; onClose: () => void }> = ({ job, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto"
    >
      <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
        <h2 className="text-xl sm:text-2xl font-bold truncate text-indigo-700">{job.title}</h2>
        <button onClick={onClose} className="p-2 hover:bg-indigo-100 rounded-full flex-shrink-0 transition-colors">
          <X className="w-6 h-6 text-indigo-600" />
        </button>
      </div>
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <img 
            src={job.companyLogo} 
            alt={job.company}
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-indigo-700">{job.title}</h3>
            <div className="flex items-center gap-2 mt-2 text-gray-600">
              <Building2 className="w-5 h-5 text-indigo-500" />
              <span>{job.company}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-5 h-5 flex-shrink-0 text-indigo-500" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-5 h-5 flex-shrink-0 text-indigo-500" />
            <span>Posted on {job.postedDate}</span>
          </div>
          <div className="flex items-center gap-2 text-green-600 font-semibold">
            <DollarSign className="w-5 h-5 flex-shrink-0" />
            <span>{job.salary}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Briefcase className="w-5 h-5 flex-shrink-0 text-indigo-500" />
            <span>{job.type}</span>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-xl font-semibold mb-4 text-indigo-700">Description</h4>
          <p className="text-gray-700 whitespace-pre-line">{job.description}</p>
        </div>

        <div className="mt-8">
          <h4 className="text-xl font-semibold mb-4 text-indigo-700">Requirements</h4>
          <ul className="list-disc list-inside space-y-2">
            {job.requirements.map((req, index) => (
              <li key={index} className="text-gray-700">{req}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
    onClick={() => window.open(job.companyUrl, '_blank')}
  >
    Apply Now
  </motion.button>
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="w-full sm:w-auto border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors"
  >
    Save Job
  </motion.button>
</div>

      </div>
    </motion.div>
  </div>
)

export const MainContent: React.FC<{ 
  isFilterOpen: boolean; 
  onToggleFilters: () => void; 
  filters: { [key: string]: string }; 
  onFilterChange: (filters: { [key: string]: string }) => void; 
  jobs: Job[]; 
  onSelectJob: (job: Job) => void; 
}> = ({ isFilterOpen, onToggleFilters, filters, onFilterChange, jobs, onSelectJob }) => (
  <main className="max-w-7xl mx-auto px-4 py-6 sm:py-8 sm:px-6 lg:px-8">
    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
      {isFilterOpen && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="lg:col-span-3"
        >
          <Filters onFilterChange={onFilterChange} />
        </motion.div>
      )}
      <div className={`${isFilterOpen ? 'lg:col-span-9' : 'lg:col-span-12'}`}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
        >
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} onClick={onSelectJob} />
          ))}
        </motion.div>
      </div>
    </div>
  </main>
)

export const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => (
  <div className="relative w-full max-w-2xl mx-auto">
    <input
      type="text"
      placeholder="Search for jobs, skills, or companies..."
      className="w-full px-4 py-3 pl-12 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
      onChange={(e) => onSearch(e.target.value)}
    />
    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400" />
  </div>
)

export const SearchSection: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => (
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-gradient-to-r from-indigo-600 to-purple-600"
  >
    <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">Find Your Dream Job</h2>
      <SearchBar onSearch={onSearch} />
    </div>
  </motion.div>
)


export default function joby() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const { searchQuery, setSearchQuery, filters, setFilters, filteredJobs } = useJobs();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isFilterOpen={isFilterOpen} onToggleFilters={() => setIsFilterOpen(!isFilterOpen)} />
      <SearchSection onSearch={setSearchQuery} />
      <MainContent
        isFilterOpen={isFilterOpen}
        onToggleFilters={() => setIsFilterOpen(!isFilterOpen)}
        filters={filters}
        onFilterChange={setFilters}
        jobs={filteredJobs}
        onSelectJob={setSelectedJob}
      />
      {selectedJob && <JobDetails job={selectedJob} onClose={() => setSelectedJob(null)} />}
    </div>
  );
}

