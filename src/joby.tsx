import React, { useState } from 'react';
import { Briefcase, Menu, X, MapPin, Building2, Clock, DollarSign, Search } from 'lucide-react';

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string; // Full-time, Part-time, Contract
  description: string;
  requirements: string[];
  technologies: string[];
  experience: string;
  postedDate: string;
  companyLogo: string;
}

export const jobs: Job[] = [
    {
      id: '3',
      title: 'Backend Developer',
      company: 'CodeWorks',
      location: 'Austin, TX',
      salary: '$110,000 - $140,000',
      type: 'Full-time',
      description: 'Looking for a skilled backend developer to create and optimize server-side logic...',
      requirements: [
        'Proficiency in Node.js and Express.js',
        'Experience with microservices architecture',
        'Familiarity with Docker and Kubernetes',
      ],
      technologies: ['Node.js', 'Express', 'MongoDB', 'Docker', 'Kubernetes'],
      experience: '4+ years',
      postedDate: '2024-03-12',
      companyLogo: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=100&h=100&fit=crop',
    },
    {
      id: '4',
      title: 'UI/UX Designer',
      company: 'DesignHive',
      location: 'Seattle, WA',
      salary: '$80,000 - $110,000',
      type: 'Full-time',
      description: 'We are looking for a creative UI/UX Designer to craft user-centric designs...',
      requirements: [
        'Strong portfolio demonstrating design skills',
        'Proficiency with Figma or Sketch',
        'Understanding of responsive design principles',
      ],
      technologies: ['Figma', 'Sketch', 'Adobe XD', 'CSS', 'HTML'],
      experience: '3+ years',
      postedDate: '2024-03-10',
      companyLogo: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=100&h=100&fit=crop',
    },
    {
      id: '5',
      title: 'Data Scientist',
      company: 'Insight Analytics',
      location: 'Boston, MA',
      salary: '$130,000 - $160,000',
      type: 'Full-time',
      description: 'Join our data science team to analyze complex datasets and build predictive models...',
      requirements: [
        'Experience with machine learning frameworks',
        'Strong knowledge of Python and R',
        'Familiarity with Big Data tools',
      ],
      technologies: ['Python', 'R', 'TensorFlow', 'Hadoop', 'Spark'],
      experience: '5+ years',
      postedDate: '2024-03-08',
      companyLogo: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=100&h=100&fit=crop',
    },
    {
      id: '6',
      title: 'DevOps Engineer',
      company: 'CloudForge',
      location: 'Remote',
      salary: '$115,000 - $145,000',
      type: 'Full-time',
      description: 'Seeking a DevOps engineer to improve CI/CD pipelines and manage cloud infrastructure...',
      requirements: [
        'Hands-on experience with AWS or Azure',
        'Proficiency in CI/CD tools like Jenkins or GitLab',
        'Scripting skills in Bash or Python',
      ],
      technologies: ['AWS', 'Azure', 'Jenkins', 'GitLab', 'Docker', 'Terraform'],
      experience: '4+ years',
      postedDate: '2024-03-07',
      companyLogo: 'https://images.unsplash.com/photo-1507209696997-2d5e45b25b4a?w=100&h=100&fit=crop',
    },
    {
      id: '7',
      title: 'Mobile App Developer',
      company: 'AppFusion',
      location: 'Chicago, IL',
      salary: '$95,000 - $125,000',
      type: 'Full-time',
      description: 'Join our team to develop cutting-edge mobile applications for iOS and Android...',
      requirements: [
        'Experience with Flutter or React Native',
        'Understanding of mobile UI/UX design principles',
        'Published apps in App Store or Google Play',
      ],
      technologies: ['Flutter', 'React Native', 'Dart', 'Swift', 'Kotlin'],
      experience: '3+ years',
      postedDate: '2024-03-06',
      companyLogo: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=100&h=100&fit=crop',
    },
    {
      id: '8',
      title: 'Frontend Developer',
      company: 'WebBright',
      location: 'San Francisco, CA',
      salary: '$100,000 - $130,000',
      type: 'Full-time',
      description: 'Looking for a frontend developer to enhance our user interface...',
      requirements: [
        'Proficiency in React and Redux',
        'Experience with CSS preprocessors like Sass',
        'Familiarity with RESTful APIs',
      ],
      technologies: ['React', 'Redux', 'Sass', 'JavaScript', 'HTML'],
      experience: '3+ years',
      postedDate: '2024-03-05',
      companyLogo: 'https://images.unsplash.com/photo-1559027615-8f859824f23c?w=100&h=100&fit=crop',
    },
    {
      id: '9',
      title: 'AI Engineer',
      company: 'InnovAI',
      location: 'Remote',
      salary: '$120,000 - $150,000',
      type: 'Full-time',
      description: 'Join our AI team to build intelligent systems and tools...',
      requirements: [
        'Experience with neural networks and NLP',
        'Strong knowledge of TensorFlow or PyTorch',
        'Ability to design and deploy AI models',
      ],
      technologies: ['TensorFlow', 'PyTorch', 'Python', 'NLP', 'Keras'],
      experience: '5+ years',
      postedDate: '2024-03-04',
      companyLogo: 'https://images.unsplash.com/photo-1505685296765-3a2736de412f?w=100&h=100&fit=crop',
    },
    {
      id: '10',
      title: 'Cybersecurity Specialist',
      company: 'SecureNet',
      location: 'New York, NY',
      salary: '$110,000 - $140,000',
      type: 'Full-time',
      description: 'Seeking an experienced cybersecurity specialist to protect sensitive data...',
      requirements: [
        'Proficiency in penetration testing tools',
        'Knowledge of network security protocols',
        'Experience with cloud security practices',
      ],
      technologies: ['Wireshark', 'Nmap', 'AWS', 'Azure', 'Kali Linux'],
      experience: '4+ years',
      postedDate: '2024-03-03',
      companyLogo: 'https://images.unsplash.com/photo-1552903550-d3634f8ad336?w=100&h=100&fit=crop',
    },
    {
      id: '11',
      title: 'Cloud Architect',
      company: 'SkyTech',
      location: 'Dallas, TX',
      salary: '$130,000 - $170,000',
      type: 'Full-time',
      description: 'Looking for a skilled cloud architect to design and implement cloud solutions...',
      requirements: [
        'Proficiency in cloud platforms like AWS or GCP',
        'Experience with Kubernetes and Docker',
        'Strong understanding of cloud architecture principles',
      ],
      technologies: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
      experience: '6+ years',
      postedDate: '2024-03-02',
      companyLogo: 'https://images.unsplash.com/photo-1584697964155-21d96df88b13?w=100&h=100&fit=crop',
    },
    {
      id: '12',
      title: 'Game Developer',
      company: 'PixelPlay Studios',
      location: 'Los Angeles, CA',
      salary: '$90,000 - $120,000',
      type: 'Full-time',
      description: 'Join our creative team to develop engaging video games...',
      requirements: [
        'Proficiency in Unity or Unreal Engine',
        'Strong programming skills in C++ or C#',
        'Understanding of game physics and graphics',
      ],
      technologies: ['Unity', 'Unreal Engine', 'C++', 'C#', '3D Modeling'],
      experience: '3+ years',
      postedDate: '2024-03-01',
      companyLogo: 'https://images.unsplash.com/photo-1551927411-0f11435a946e?w=100&h=100&fit=crop',
    },
    {
      id: '13',
      title: 'Blockchain Developer',
      company: 'ChainLink Labs',
      location: 'San Jose, CA',
      salary: '$140,000 - $180,000',
      type: 'Full-time',
      description: 'We are seeking a blockchain developer to build decentralized applications...',
      requirements: [
        'Experience with Ethereum and smart contracts',
        'Knowledge of Solidity and blockchain architecture',
        'Familiarity with cryptography concepts',
      ],
      technologies: ['Ethereum', 'Solidity', 'Web3.js', 'Truffle', 'Ganache'],
      experience: '5+ years',
      postedDate: '2024-02-28',
      companyLogo: 'https://images.unsplash.com/photo-1560841468-e3fc712f9f86?w=100&h=100&fit=crop',
    },
    {
      id: '14',
      title: 'QA Automation Engineer',
      company: 'QualityFirst',
      location: 'Miami, FL',
      salary: '$85,000 - $115,000',
      type: 'Full-time',
      description: 'Looking for a QA Automation Engineer to design and execute automated test cases...',
      requirements: [
        'Proficiency in Selenium or Cypress',
        'Experience with automated testing frameworks',
        'Strong knowledge of software QA methodologies',
      ],
      technologies: ['Selenium', 'Cypress', 'Java', 'Python', 'Jenkins'],
      experience: '4+ years',
      postedDate: '2024-02-27',
      companyLogo: 'https://images.unsplash.com/photo-1564866657316-f6096e6a29d1?w=100&h=100&fit=crop',
    },
  ];
  

export const useJobs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<{ [key: string]: string }>({});

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
  const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Remote'];
  const experienceLevels = ['Entry Level', '1-3 years', '3-5 years', '5+ years'];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Job Type</h3>
        <div className="space-y-2">
          {jobTypes.map((type) => (
            <label key={type} className="flex items-center gap-2">
              <input
                type="checkbox"
                className="rounded text-blue-600 focus:ring-blue-500"
                onChange={(e) => onFilterChange({ type: e.target.checked ? type : '' })}
              />
              <span>{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Experience Level</h3>
        <div className="space-y-2">
          {experienceLevels.map((level) => (
            <label key={level} className="flex items-center gap-2">
              <input
                type="checkbox"
                className="rounded text-blue-600 focus:ring-blue-500"
                onChange={(e) => onFilterChange({ experience: e.target.checked ? level : '' })}
              />
              <span>{level}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Header: React.FC<{ isFilterOpen: boolean; onToggleFilters: () => void }> = ({ isFilterOpen, onToggleFilters }) => (
  <header className="bg-white shadow-sm sticky top-0 z-20">
    <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Briefcase className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">CareerConnect</h1>
        </div>
        <button
          onClick={onToggleFilters}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          aria-label="Toggle filters"
        >
          {isFilterOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </div>
  </header>
);

export const JobCard: React.FC<{ job: Job; onClick: (job: Job) => void }> = ({ job, onClick }) => (
  <div 
    className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow cursor-pointer"
    onClick={() => onClick(job)}
  >
    <div className="flex flex-col sm:flex-row items-start gap-4">
      <img 
        src={job.companyLogo} 
        alt={job.company}
        className="w-12 h-12 rounded-lg object-cover"
      />
      <div className="flex-1 min-w-0">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">{job.title}</h3>
        <div className="flex flex-wrap items-center gap-2 mt-2 text-gray-600">
          <div className="flex items-center gap-1">
            <Building2 className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">{job.company}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">{job.location}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const JobDetails: React.FC<{ job: Job; onClose: () => void }> = ({ job, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
    <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
      <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
        <h2 className="text-xl sm:text-2xl font-bold truncate">{job.title}</h2>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full flex-shrink-0">
          <X className="w-6 h-6" />
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
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{job.title}</h3>
            <div className="flex items-center gap-2 mt-2 text-gray-600">
              <Building2 className="w-5 h-5" />
              <span>{job.company}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-5 h-5 flex-shrink-0" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-5 h-5 flex-shrink-0" />
            <span>Posted on {job.postedDate}</span>
          </div>
          <div className="flex items-center gap-2 text-green-600 font-semibold">
            <DollarSign className="w-5 h-5 flex-shrink-0" />
            <span>{job.salary}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Briefcase className="w-5 h-5 flex-shrink-0" />
            <span>{job.type}</span>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-xl font-semibold mb-4">Description</h4>
          <p className="text-gray-700 whitespace-pre-line">{job.description}</p>
        </div>

        <div className="mt-8">
          <h4 className="text-xl font-semibold mb-4">Requirements</h4>
          <ul className="list-disc list-inside space-y-2">
            {job.requirements.map((req, index) => (
              <li key={index} className="text-gray-700">{req}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Apply Now
          </button>
          <button className="w-full sm:w-auto border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
            Save Job
          </button>
        </div>
      </div>
    </div>
  </div>
);

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
        <div className="lg:col-span-3">
          <Filters onFilterChange={onFilterChange} />
        </div>
      )}
      <div className="lg:col-span-9">
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} onClick={onSelectJob} />
          ))}
        </div>
      </div>
    </div>
  </main>
);

export const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => (
  <div className="relative w-full max-w-2xl mx-auto">
    <input
      type="text"
      placeholder="Search for jobs, skills, or companies..."
      className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
      onChange={(e) => onSearch(e.target.value)}
    />
    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
  </div>
);

export const SearchSection: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => (
  <div className="bg-blue-600">
    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Find Your Dream Job</h2>
      <SearchBar onSearch={onSearch} />
    </div>
  </div>
);


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
