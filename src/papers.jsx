import React, { useState } from "react";

const CompanyPapers = () => {
  const [papers] = useState([
    {
      company: "Google",
      year: 2022,
      link: "/papers/google-2022.pdf",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      company: "Microsoft",
      year: 2021,
      link: "/papers/microsoft-2021.pdf",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
      company: "Amazon",
      year: 2023,
      link: "/papers/amazon-2023.pdf",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      company: "Meta",
      year: 2022,
      link: "/papers/meta-2022.pdf",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Meta_Platforms_Inc._logo.svg",
    },
    {
      company: "Apple",
      year: 2021,
      link: "/papers/apple-2021.pdf",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    },
    {
      company: "Netflix",
      year: 2023,
      link: "/papers/netflix-2023.pdf",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    },
    {
      company: "Tesla",
      year: 2022,
      link: "/papers/tesla-2022.pdf",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    },
    {
      company: "Adobe",
      year: 2021,
      link: "/papers/adobe-2021.pdf",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Adobe_Corporate_Logo.svg",
    },
    {
      company: "Salesforce",
      year: 2023,
      link: "/papers/salesforce-2023.pdf",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Salesforce.com_logo.svg",
    },
    {
      company: "Oracle",
      year: 2022,
      link: "/papers/oracle-2022.pdf",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    },
    {
      company: "IBM",
      year: 2021,
      link: "/papers/ibm-2021.pdf",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    },
    {
      company: "Intel",
      year: 2023,
      link: "/papers/intel-2023.pdf",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel_logo_%282020%29.svg",
    },
    {
      company: "Cisco",
      year: 2022,
      link: "/papers/cisco-2022.pdf",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Cisco_logo_blue_2016.svg",
    },
    {
      company: "Qualcomm",
      year: 2021,
      link: "/papers/qualcomm-2021.pdf",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Qualcomm_logo.svg",
    },
    {
      company: "Twitter",
      year: 2023,
      link: "/papers/twitter-2023.pdf",
      logo: "https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg",
    },
    {
      company: "Spotify",
      year: 2022,
      link: "/papers/spotify-2022.pdf",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
    },
    {
      company: "Uber",
      year: 2021,
      link: "/papers/uber-2021.pdf",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
    },
    {
      company: "Airbnb",
      year: 2023,
      link: "/papers/airbnb-2023.pdf",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
    },
    {
      company: "Shopify",
      year: 2022,
      link: "/papers/shopify-2022.pdf",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Shopify_logo_2018.svg",
    },
    {
      company: "LinkedIn",
      year: 2021,
      link: "/papers/linkedin-2021.pdf",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    },
  ]);

  return (
    <div>
      <style>{`
        .container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .card {
          background-color: #ffffff;
          border: 1px solid #e0e0e0;
          border-radius: 10px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        .company-logo {
          width: 60px;
          height: 60px;
          margin-bottom: 15px;
        }
        .company-name {
          font-size: 1.5rem;
          color: #333333;
          margin-bottom: 10px;
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
          transition: background-color 0.3s ease;
        }
        .download-button:hover {
          background-color: #0056b3;
        }
      `}</style>
      <div className="container">
        {papers.map((paper, index) => (
          <div key={index} className="card">
            <img
              src={paper.logo}
              alt={`${paper.company} logo`}
              className="company-logo"
            />
            <h2 className="company-name">{paper.company}</h2>
            <p className="year">Year: {paper.year}</p>
            <a href={paper.link} download className="download-button">
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyPapers;
