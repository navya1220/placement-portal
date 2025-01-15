import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

const CompanyPapers = () => {
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchPapers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/paper");
        setPapers(response.data); 
      } catch (err) {
        console.error(err);
        setError("Failed to fetch papers.");
      } finally {
        setLoading(false);
      }
    };
    fetchPapers();
  }, []);

  const handleNavigate = () => {
    navigate("/");  
  };

  return (
    <div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
        body {
          font-family: 'Poppins', sans-serif;
          margin: 0;
          background-color: #f9f9f9;
          color: #333;
        }
        .container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          padding: 20px;
          width: 40%;
          margin: 0 auto;
        }
        .card {
          position: relative;
          background: linear-gradient(145deg, #ffffff, #f0f0f0);
          border-radius: 15px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
        }
        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          background: linear-gradient(145deg, #e0e0e0, #ffffff);
        }
        .company-logo {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          margin-bottom: 15px;
          transition: transform 0.3s ease;
        }
        .card:hover .company-logo {
          transform: scale(1.1);
        }
        .company-name {
          font-size: 1.5rem;
          color: #007bff;
          margin-bottom: 10px;
          font-weight: 600;
        }
        .year {
          font-size: 1rem;
          color: #666666;
          margin-bottom: 15px;
        }
        .download-button {
          display: inline-block;
          padding: 10px 16px;
          background-color: #007bff;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          font-size: 1rem;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }
        .download-button:hover {
          background-color: #0056b3;
          transform: scale(1.05);
        }
        .ribbon {
          position: absolute;
          top: -10px;
          left: -10px;
          background: #007bff;
          color: white;
          padding: 5px 15px;
          font-size: 0.9rem;
          font-weight: bold;
          transform: rotate(-45deg);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .loading,
        .error {
          text-align: center;
          font-size: 1.2rem;
          margin-top: 50px;
        }
        .error {
          color: red;
        }
        @media (max-width: 768px) {
          .container {
            padding: 10px;
          }
          .card {
            padding: 15px;
          }
          .company-name {
            font-size: 1.2rem;
          }
          .download-button {
            font-size: 0.9rem;
            padding: 8px 14px;
          }
        }
      `}</style>

      {loading ? (
        <div className="loading">Loading papers...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="container">
          {papers.map((paper, index) => (
            <div key={index} className="card">
              <div className="ribbon">{paper.company}</div>
              <img
                src={paper.logo}
                alt={`${paper.company} logo`}
                className="company-logo"
              />
              <h2 className="company-name">{paper.company}</h2>
              <p className="year">Year: {paper.year}</p>
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="download-button"
              >
                View Paper
              </a>
            </div>
          ))}
        </div>
      )}

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={handleNavigate} style={buttonStyle}>Go to App Page</button>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "1.2rem",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease, transform 0.3s ease",
};

export default CompanyPapers;
