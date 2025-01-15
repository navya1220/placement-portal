import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion, AnimatePresence } from 'framer-motion';

const Cmp = () => {
  const companies = [
    // MNCs
    { id: 1, name: "Google", logo: "https://logo.clearbit.com/google.com", process: "Online assessment, technical rounds, HR interview.", requirements: "Strong programming skills, problem-solving, teamwork.", category: "MNC", recruitmentLink: "https://careers.google.com/" },
    { id: 2, name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com", process: "Coding test, technical interviews, final HR round.", requirements: "Knowledge of algorithms, systems design, communication.", category: "MNC", recruitmentLink: "https://careers.microsoft.com/" },
    { id: 3, name: "Amazon", logo: "https://logo.clearbit.com/amazon.com", process: "Online test, system design, behavioral interview.", requirements: "Data structures, leadership principles, coding skills.", category: "MNC", recruitmentLink: "https://www.amazon.jobs/" },
    { id: 4, name: "Apple", logo: "https://logo.clearbit.com/apple.com", process: "System design, behavioral rounds, and technical problem-solving.", requirements: "Strong design, algorithms, and coding skills.", category: "MNC", recruitmentLink: "https://www.apple.com/jobs/" },
    { id: 5, name: "IBM", logo: "https://logo.clearbit.com/ibm.com", process: "Online test, technical interview, HR round.", requirements: "Problem-solving, software engineering skills.", category: "MNC", recruitmentLink: "https://www.ibm.com/employment/" },
    { id: 6, name: "Facebook", logo: "https://logo.clearbit.com/facebook.com", process: "Coding test, technical interviews, HR interview.", requirements: "Strong in coding, systems design, and data structures.", category: "MNC", recruitmentLink: "https://www.metacareers.com/" },
    { id: 7, name: "Accenture", logo: "https://logo.clearbit.com/accenture.com", process: "Online aptitude, group discussion, HR round.", requirements: "Teamwork, problem-solving, leadership.", category: "MNC", recruitmentLink: "https://www.accenture.com/in-en/careers" },
    { id: 8, name: "Deloitte", logo: "https://logo.clearbit.com/deloitte.com", process: "Aptitude test, case study, final HR round.", requirements: "Strong analytical and interpersonal skills.", category: "MNC", recruitmentLink: "https://www2.deloitte.com/global/en/careers.html" },
    { id: 9, name: "Intel", logo: "https://logo.clearbit.com/intel.com", process: "Coding interview, technical problem-solving.", requirements: "Good coding, hardware knowledge, adaptability.", category: "MNC", recruitmentLink: "https://www.intel.com/content/www/us/en/jobs.html" },
    { id: 10, name: "Oracle", logo: "https://logo.clearbit.com/oracle.com", process: "Online test, two technical rounds, HR round.", requirements: "Database management, coding knowledge.", category: "MNC", recruitmentLink: "https://www.oracle.com/corporate/careers/" },
    { id: 11, name: "Samsung", logo: "https://logo.clearbit.com/samsung.com", process: "Aptitude test, coding challenges, technical rounds.", requirements: "Adaptability, problem-solving skills.", category: "MNC", recruitmentLink: "https://www.samsung.com/us/careers/" },
    { id: 12, name: "Cisco", logo: "https://logo.clearbit.com/cisco.com", process: "Online assessment, technical rounds, HR interview.", requirements: "Networking knowledge, coding skills, communication.", category: "MNC", recruitmentLink: "https://jobs.cisco.com/" },
    { id: 13, name: "HP", logo: "https://logo.clearbit.com/hp.com", process: "Aptitude test, coding test, technical round.", requirements: "Software engineering skills, coding expertise.", category: "MNC", recruitmentLink: "https://jobs.hp.com/" },
    { id: 14, name: "Adobe", logo: "https://logo.clearbit.com/adobe.com", process: "Coding test, system design interview, HR interview.", requirements: "Strong design and problem-solving skills.", category: "MNC", recruitmentLink: "https://adobe.wd5.myworkdayjobs.com/en-US/careers" },
    { id: 15, name: "Salesforce", logo: "https://logo.clearbit.com/salesforce.com", process: "Online test, technical interviews, behavioral round.", requirements: "Coding skills, cloud knowledge.", category: "MNC", recruitmentLink: "https://www.salesforce.com/company/careers/" },
    { id: 16, name: "SAP", logo: "https://logo.clearbit.com/sap.com", process: "Aptitude test, coding test, HR interview.", requirements: "Enterprise software knowledge, coding expertise.", category: "MNC", recruitmentLink: "https://jobs.sap.com/" },
    { id: 17, name: "Qualcomm", logo: "https://logo.clearbit.com/qualcomm.com", process: "Technical interviews, coding tests.", requirements: "Hardware and software skills, problem-solving.", category: "MNC", recruitmentLink: "https://www.qualcomm.com/company/careers" },
    { id: 18, name: "Infosys", logo: "https://logo.clearbit.com/infosys.com", process: "Online assessment, HR interview.", requirements: "Coding basics, adaptability, teamwork.", category: "MNC", recruitmentLink: "https://www.infosys.com/careers/" },
    { id: 19, name: "TCS", logo: "https://logo.clearbit.com/tcs.com", process: "Aptitude test, technical round, HR interview.", requirements: "Basic coding, communication skills.", category: "MNC", recruitmentLink: "https://www.tcs.com/careers" },
    { id: 20, name: "Wipro", logo: "https://logo.clearbit.com/wipro.com", process: "Aptitude test, coding round, HR interview.", requirements: "Software engineering basics, teamwork.", category: "MNC", recruitmentLink: "https://careers.wipro.com/" },
  
    // Middle-Sized Companies
    { id: 21, name: "Zomato", logo: "https://logo.clearbit.com/zomato.com", process: "Coding round, cultural fit interview, case study discussion.", requirements: "Good problem-solving, adaptability, team collaboration.", category: "Middle", recruitmentLink: "https://www.zomato.com/careers" },
    { id: 22, name: "Freshworks", logo: "https://logo.clearbit.com/freshworks.com", process: "Online test, technical and HR interview.", requirements: "Strong coding and communication skills.", category: "Middle", recruitmentLink: "https://www.freshworks.com/company/careers/" },
    { id: 23, name: "Paytm", logo: "https://logo.clearbit.com/paytm.com", process: "Online aptitude test, two technical interviews.", requirements: "Backend knowledge, problem-solving skills.", category: "Middle", recruitmentLink: "https://paytm.com/about-us/careers/" },
    { id: 24, name: "Ola", logo: "https://logo.clearbit.com/ola.com", process: "Technical problem-solving, HR round.", requirements: "Coding skills, software engineering concepts.", category: "Middle", recruitmentLink: "https://www.olacabs.com/careers" },
    { id: 25, name: "Flipkart", logo: "https://logo.clearbit.com/flipkart.com", process: "Aptitude test, technical rounds, HR round.", requirements: "Adaptability, teamwork, coding skills.", category: "Middle", recruitmentLink: "https://www.flipkartcareers.com/" },
    { id: 26, name: "MakeMyTrip", logo: "https://logo.clearbit.com/makemytrip.com", process: "Coding challenge, HR interview.", requirements: "Good problem-solving and coding.", category: "Middle", recruitmentLink: "https://careers.makemytrip.com/" },
    { id: 27, name: "Swiggy", logo: "https://logo.clearbit.com/swiggy.com", process: "Aptitude test, coding test, behavioral interview.", requirements: "Adaptability, data handling, leadership skills.", category: "Middle", recruitmentLink: "https://careers.swiggy.com/" },
    { id: 28, name: "BigBasket", logo: "https://logo.clearbit.com/bigbasket.com", process: "Case study, technical round, HR interview.", requirements: "Team collaboration and problem-solving.", category: "Middle", recruitmentLink: "https://www.bigbasket.com/careers/" },
    { id: 29, name: "Lenskart", logo: "https://logo.clearbit.com/lenskart.com", process: "Aptitude test, coding challenges, HR round.", requirements: "Coding skills, adaptability, teamwork.", category: "Middle", recruitmentLink: "https://careers.lenskart.com/" },
    { id: 30, name: "Nykaa", logo: "https://logo.clearbit.com/nykaa.com", process: "Coding test, product management discussion.", requirements: "E-commerce knowledge, coding skills.", category: "Middle", recruitmentLink: "https://careers.nykaa.com/" },
  
    // Startups
    { id: 41, name: "CRED", logo: "https://logo.clearbit.com/cred.club", process: "Technical interview, culture fit round.", requirements: "Understanding of app development, coding skills.", category: "Startup", recruitmentLink: "https://careers.cred.club/" },
    { id: 42, name: "Razorpay", logo: "https://logo.clearbit.com/razorpay.com", process: "Coding challenge, technical interview.", requirements: "Backend and payment gateway expertise.", category: "Startup", recruitmentLink: "https://razorpay.com/jobs/" },
    { id: 43, name: "Urban Company", logo: "https://logo.clearbit.com/urbancompany.com", process: "Technical interview, HR round.", requirements: "Coding and product knowledge.", category: "Startup", recruitmentLink: "https://www.urbancompany.com/careers" },
    { id: 44, name: "Licious", logo: "https://logo.clearbit.com/licious.in", process: "Case study discussion, technical round.", requirements: "Problem-solving, product understanding.", category: "Startup", recruitmentLink: "https://www.licious.in/careers" },
    { id: 45, name: "Meesho", logo: "https://logo.clearbit.com/meesho.com", process: "Coding challenges, HR round.", requirements: "Full-stack knowledge, adaptability.", category: "Startup", recruitmentLink: "https://careers.meesho.com/" },
    { id: 46, name: "Dunzo", logo: "https://logo.clearbit.com/dunzo.com", process: "Case study discussion, problem-solving.", requirements: "Strong coding and adaptability.", category: "Startup", recruitmentLink: "https://www.dunzo.com/careers" },
    { id: 47, name: "Pharmeasy", logo: "https://logo.clearbit.com/pharmeasy.in", process: "Coding test, technical interview, HR round.", requirements: "Team collaboration, adaptability, coding skills.", category: "Startup", recruitmentLink: "https://pharmeasy.in/careers" },
    { id: 48, name: "Unacademy", logo: "https://logo.clearbit.com/unacademy.com", process: "Online coding test, culture fit round.", requirements: "Strong coding, teamwork.", category: "Startup", recruitmentLink: "https://unacademy.com/careers" },
    { id: 49, name: "Upstox", logo: "https://logo.clearbit.com/upstox.com", process: "Technical interview, behavioral interview.", requirements: "Good communication, coding expertise.", category: "Startup", recruitmentLink: "https://upstox.com/careers/" },
    { id: 50, name: "ShareChat", logo: "https://logo.clearbit.com/sharechat.com", process: "Technical interview, product design round.", requirements: "Strong problem-solving and design skills.", category: "Startup", recruitmentLink: "https://sharechat.com/careers" }
];


const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [filteredCompanies, setFilteredCompanies] = useState(companies);

  useEffect(() => {
    const filtered = companies.filter((company) => {
      const matchesCategory =
        selectedCategory === "All" || company.category === selectedCategory;
      const matchesSearch = company.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    setFilteredCompanies(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <motion.header 
        className="text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-blue-600 mb-2">CampusConnect</h1>
        <p className="text-xl text-gray-600">Explore Top Companies</p>
      </motion.header>

      {/* Search Bar */}
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <input
          type="text"
          placeholder="Search company..."
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </motion.div>

      {/* Category Filter */}
      <motion.div 
        className="flex flex-wrap justify-center mb-6 gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {["All", "MNC", "Middle", "Startup"].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Company List */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <AnimatePresence>
          {filteredCompanies.map((company) => (
            <motion.div
              key={company.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="w-full h-32 object-contain p-4"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold mb-2">{company.name}</h3>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  onClick={() => setSelectedCompany(company)}
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* No Companies Found */}
      {filteredCompanies.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No companies found.</p>
      )}

      {/* Modal for Company Details */}
      <AnimatePresence>
        {selectedCompany && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCompany(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 15 }}
              className="bg-white rounded-lg p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4">{selectedCompany.name}</h2>
              <p className="mb-2"><strong>Recruitment Process:</strong> {selectedCompany.process}</p>
              <p className="mb-4"><strong>Requirements:</strong> {selectedCompany.requirements}</p>
              <a
                href={selectedCompany.recruitmentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Learn More
              </a>
              <button
                className="mt-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                onClick={() => setSelectedCompany(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cmp;