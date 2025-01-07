import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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

  const filteredCompanies = companies.filter((company) => {
    const matchesCategory =
      selectedCategory === "All" || company.category === selectedCategory;
    const matchesSearch = company.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const styles = {
    header: {
      textAlign: "center",
      marginBottom: "20px",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#007bff",
    },
    card: {
      transition: "all 0.3s ease-in-out",
    },
    cardHover: {
      transform: "scale(1.03)",
    },
    searchBar: {
      marginBottom: "20px",
    },
    button: {
      margin: "5px",
    },
    modalBackdrop: {
      display: "block",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };

  return (
    <div className="container mt-4">
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>CareerConnect</h1>
        <p className="text-muted">Explore Top Companies</p>
      </header>

      {/* Search Bar */}
      <div style={styles.searchBar}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Search company..."
            className="form-control"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="text-center mb-4">
        {["All", "MNC", "Middle", "Startup"].map((category) => (
          <button
            key={category}
            className={`btn btn-sm ${
              selectedCategory === category
                ? "btn-primary"
                : "btn-outline-primary"
            }`}
            onClick={() => setSelectedCategory(category)}
            style={styles.button}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Company List */}
      <div className="row">
        {filteredCompanies.map((company) => (
          <div className="col-md-4 mb-4" key={company.id}>
            <div
              className="card shadow-sm"
              style={styles.card}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.03)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img
                src={company.logo}
                className="card-img-top p-3"
                alt={company.name}
                style={{ height: "120px", objectFit: "contain" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{company.name}</h5>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => setSelectedCompany(company)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Companies Found */}
      {filteredCompanies.length === 0 && (
        <p className="text-center text-muted">No companies found.</p>
      )}

      {/* Modal for Company Details */}
      {selectedCompany && (
        <div
          className="modal fade show"
          style={styles.modalBackdrop}
          onClick={() => setSelectedCompany(null)}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedCompany.name} Details</h5>
                <button
                  className="btn-close"
                  onClick={() => setSelectedCompany(null)}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  <strong>Recruitment Process:</strong> {selectedCompany.process}
                </p>
                <p>
                  <strong>Requirements:</strong> {selectedCompany.requirements}
                </p>
                <p>
                  <strong>Learn More:</strong>{" "}
                  <a
                    href={selectedCompany.recruitmentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary"
                  >
                    View Recruitment Details
                  </a>
                </p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelectedCompany(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cmp;
