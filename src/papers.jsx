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
        const response = await axios.get(
          "https://placement-portal-backend-e74c.onrender.com/api/paper"
        );
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
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          padding: 20px;
          width: 90%;
          margin: 0 auto;
        }
        .card {
          position: relative;
          background: linear-gradient(145deg, #ffffff, #f0f0f0);
          border-radius: 15px;
          padding: 15px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
        }
        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
          background: linear-gradient(145deg, #e0e0e0, #ffffff);
        }
        .company-logo {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          margin-bottom: 10px;
          transition: transform 0.3s ease;
        }
        .card:hover .company-logo {
          transform: scale(1.1);
        }
        .company-name {
          font-size: 1.2rem;
          color: #007bff;
          margin-bottom: 8px;
          font-weight: 600;
        }
        .year {
          font-size: 0.9rem;
          color: #666666;
          margin-bottom: 12px;
        }
        .download-button {
          display: inline-block;
          padding: 8px 12px;
          background-color: #007bff;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          font-size: 0.9rem;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }
        .download-button:hover {
          background-color: #0056b3;
          transform: scale(1.05);
        }
        .ribbon {
          position: absolute;
          top: -8px;
          left: -8px;
          background: #007bff;
          color: white;
          padding: 4px 10px;
          font-size: 0.8rem;
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
        .button-container {
          text-align: center;
          margin-top: 20px;
        }
        .navigate-button {
          padding: 10px 15px;
          font-size: 1rem;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }
        .navigate-button:hover {
          background-color: #0056b3;
          transform: scale(1.05);
        }
        @media (max-width: 480px) {
          .container {
            gap: 10px;
          }
          .card {
            padding: 10px;
          }
          .company-logo {
            width: 50px;
            height: 50px;
          }
          .company-name {
            font-size: 1rem;
          }
          .download-button {
            font-size: 0.8rem;
            padding: 6px 10px;
          }
          .ribbon {
            font-size: 0.7rem;
            padding: 3px 8px;
          }
          .navigate-button {
            font-size: 0.9rem;
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

      <div className="button-container">
        <button onClick={handleNavigate} className="navigate-button">
          Go to App Page
        </button>
      </div>
    </div>
  );
};

export default CompanyPapers;
