import React, { useState, useMemo } from 'react';
import { X, Briefcase } from 'lucide-react';
import { Link } from "react-router-dom";

export const companies: Company[] = [
    {
      id: '1',
      name: 'TCS (Tata Consultancy Services)',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300',
      description: 'India\'s largest IT services company providing consulting, technology, and digital solutions',
      requiredSkills: ['Java', 'Spring Boot', 'SQL', 'JavaScript'],
      preferredSkills: ['Cloud Computing', 'Microservices', 'DevOps', 'React'],
      industry: 'IT Services',
      location: 'Mumbai, India',
      roles: ['Software Engineer', 'Technical Lead', 'Solution Architect']
    },
    {
      id: '2',
      name: 'Infosys',
      logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=300',
      description: 'Global leader in next-generation digital services and consulting',
      requiredSkills: ['Java', 'Python', 'Angular', 'Node.js'],
      preferredSkills: ['AI/ML', 'Blockchain', 'AWS', 'Azure'],
      industry: 'IT Services',
      location: 'Bangalore, India',
      roles: ['Full Stack Developer', 'Data Engineer', 'Cloud Architect']
    },
    {
      id: '3',
      name: 'Wipro',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300',
      description: 'Leading technology services and consulting company',
      requiredSkills: ['JavaScript', 'Java', '.NET', 'SQL'],
      preferredSkills: ['Docker', 'Kubernetes', 'CI/CD', 'React'],
      industry: 'IT Services',
      location: 'Bangalore, India',
      roles: ['Software Developer', 'DevOps Engineer', 'Technical Architect']
    },
    {
      id: '4',
      name: 'HCL Technologies',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300',
      description: 'Global technology company helping enterprises reimagine their businesses',
      requiredSkills: ['Java', 'Python', 'Cloud', 'DevOps'],
      preferredSkills: ['Kubernetes', 'Machine Learning', 'React', 'Node.js'],
      industry: 'IT Services',
      location: 'Noida, India',
      roles: ['Cloud Engineer', 'Full Stack Developer', 'DevOps Specialist']
    },
    {
      id: '5',
      name: 'Tech Mahindra',
      logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=300',
      description: 'Digital transformation, consulting and business re-engineering services provider',
      requiredSkills: ['Java', 'JavaScript', 'Python', 'Cloud'],
      preferredSkills: ['5G', 'IoT', 'Blockchain', 'AI'],
      industry: 'IT Services',
      location: 'Pune, India',
      roles: ['Software Engineer', 'Network Engineer', 'Solution Architect']
    },
    {
      id: '6',
      name: 'L&T Infotech',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300',
      description: 'Global technology consulting and digital solutions company',
      requiredSkills: ['Java', 'Spring', 'Angular', 'SQL'],
      preferredSkills: ['Cloud', 'DevOps', 'Microservices', 'Docker'],
      industry: 'IT Services',
      location: 'Mumbai, India',
      roles: ['Java Developer', 'Frontend Developer', 'DevOps Engineer']
    },
    {
      id: '7',
      name: 'Mindtree',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300',
      description: 'Digital transformation and technology services company',
      requiredSkills: ['Java', 'JavaScript', 'Cloud', 'Agile'],
      preferredSkills: ['DevOps', 'AWS', 'React', 'Node.js'],
      industry: 'IT Services',
      location: 'Bangalore, India',
      roles: ['Full Stack Developer', 'Cloud Engineer', 'Scrum Master']
    },
    {
      id: '8',
      name: 'Mphasis',
      logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=300',
      description: 'Next-gen technology solutions provider specializing in cloud and cognitive services',
      requiredSkills: ['Java', 'Python', 'Cloud', 'ML'],
      preferredSkills: ['AI', 'DevOps', 'Microservices', 'AWS'],
      industry: 'IT Services',
      location: 'Bangalore, India',
      roles: ['ML Engineer', 'Cloud Architect', 'Software Developer']
    },
    {
      id: '9',
      name: 'Persistent Systems',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300',
      description: 'Digital engineering and enterprise modernization company',
      requiredSkills: ['Java', 'JavaScript', 'Cloud', 'DevOps'],
      preferredSkills: ['Kubernetes', 'React', 'Node.js', 'AWS'],
      industry: 'IT Services',
      location: 'Pune, India',
      roles: ['Software Engineer', 'DevOps Engineer', 'Cloud Architect']
    },
    {
      id: '10',
      name: 'Cyient',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300',
      description: 'Engineering, manufacturing, digital solutions and technology company',
      requiredSkills: ['Java', 'Python', 'CAD', 'PLM'],
      preferredSkills: ['IoT', '3D Modeling', 'Cloud', 'DevOps'],
      industry: 'Engineering Services',
      location: 'Hyderabad, India',
      roles: ['Software Engineer', 'Design Engineer', 'PLM Consultant']
    },
    {
      id: '11',
      name: 'Oracle India',
      logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=300',
      description: 'Cloud technology and database solutions provider',
      requiredSkills: ['Java', 'SQL', 'PL/SQL', 'Cloud'],
      preferredSkills: ['Kubernetes', 'Microservices', 'DevOps', 'Python'],
      industry: 'Technology',
      location: 'Bangalore, India',
      roles: ['Database Developer', 'Cloud Engineer', 'Software Developer']
    },
    {
      id: '12',
      name: 'SAP Labs India',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300',
      description: 'Enterprise software and cloud solutions provider',
      requiredSkills: ['ABAP', 'Java', 'JavaScript', 'Cloud'],
      preferredSkills: ['SAP HANA', 'Fiori', 'UI5', 'Python'],
      industry: 'Enterprise Software',
      location: 'Bangalore, India',
      roles: ['SAP Developer', 'Software Engineer', 'Cloud Architect']
    },
    {
      id: '13',
      name: 'Adobe India',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300',
      description: 'Digital media and marketing software company',
      requiredSkills: ['Java', 'JavaScript', 'React', 'Cloud'],
      preferredSkills: ['AI/ML', 'Node.js', 'AWS', 'Python'],
      industry: 'Software',
      location: 'Noida, India',
      roles: ['Software Engineer', 'UI Developer', 'ML Engineer']
    },
    {
      id: '14',
      name: 'Microsoft India',
      logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=300',
      description: 'Global technology leader in cloud computing and software',
      requiredSkills: ['.NET', 'C#', 'Azure', 'JavaScript'],
      preferredSkills: ['React', 'Node.js', 'AI/ML', 'DevOps'],
      industry: 'Technology',
      location: 'Hyderabad, India',
      roles: ['Software Engineer', 'Cloud Solutions Architect', 'DevOps Engineer']
    },
    {
      id: '15',
      name: 'Amazon India',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300',
      description: 'E-commerce and cloud computing giant',
      requiredSkills: ['Java', 'AWS', 'Python', 'JavaScript'],
      preferredSkills: ['React', 'Node.js', 'Machine Learning', 'DevOps'],
      industry: 'Technology',
      location: 'Bangalore, India',
      roles: ['SDE', 'Cloud Engineer', 'Data Scientist']
    },
    {
      id: '16',
      name: 'Cognizant',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300',
      description: 'Digital products and IT services company',
      requiredSkills: ['Java', 'JavaScript', '.NET', 'SQL'],
      preferredSkills: ['Cloud', 'DevOps', 'AI/ML', 'React'],
      industry: 'IT Services',
      location: 'Chennai, India',
      roles: ['Software Engineer', 'Business Analyst', 'Solution Architect']
    },
    {
      id: '17',
      name: 'Capgemini India',
      logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=300',
      description: 'Consulting, technology services and digital transformation company',
      requiredSkills: ['Java', 'Python', 'Cloud', 'JavaScript'],
      preferredSkills: ['DevOps', 'Microservices', 'AI/ML', 'React'],
      industry: 'IT Services',
      location: 'Mumbai, India',
      roles: ['Full Stack Developer', 'Cloud Engineer', 'Data Scientist']
    },
    {
      id: '18',
      name: 'Accenture India',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300',
      description: 'Global professional services company with digital capabilities',
      requiredSkills: ['Java', 'JavaScript', 'Cloud', 'Python'],
      preferredSkills: ['AI/ML', 'Blockchain', 'IoT', 'DevOps'],
      industry: 'Professional Services',
      location: 'Bangalore, India',
      roles: ['Technology Consultant', 'Software Engineer', 'Cloud Architect']
    },
    {
      id: '19',
      name: 'Hexaware',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300',
      description: 'Next-generation IT, BPO and consulting services provider',
      requiredSkills: ['Java', 'JavaScript', 'Cloud', 'Automation'],
      preferredSkills: ['RPA', 'AI/ML', 'DevOps', 'React'],
      industry: 'IT Services',
      location: 'Mumbai, India',
      roles: ['Software Engineer', 'RPA Developer', 'Cloud Specialist']
    },
    {
      id: '20',
      name: 'Larsen & Toubro Technology Services',
      logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=300',
      description: 'Pure-play engineering services company',
      requiredSkills: ['Java', 'Python', 'Embedded', 'IoT'],
      preferredSkills: ['5G', 'AI/ML', 'Cloud', 'DevOps'],
      industry: 'Engineering Services',
      location: 'Vadodara, India',
      roles: ['Embedded Engineer', 'IoT Developer', 'Software Engineer']
    },
    {
      id: '21',
      name: 'Birlasoft',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300',
      description: 'Digital and enterprise solutions provider',
      requiredSkills: ['Java', 'JavaScript', 'Cloud', 'ERP'],
      preferredSkills: ['SAP', 'Oracle', 'DevOps', 'AI/ML'],
      industry: 'IT Services',
      location: 'Noida, India',
      roles: ['ERP Consultant', 'Software Engineer', 'Cloud Architect']
    },
    {
      id: '22',
      name: 'Coforge',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300',
      description: 'Digital transformation and technology solutions provider',
      requiredSkills: ['Java', 'Python', 'Cloud', 'JavaScript'],
      preferredSkills: ['AI/ML', 'DevOps', 'Microservices', 'React'],
      industry: 'IT Services',
      location: 'Greater Noida, India',
      roles: ['Software Engineer', 'Cloud Engineer', 'Solution Architect']
    },
    {
      id: '23',
      name: 'Zensar Technologies',
      logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=300',
      description: 'Digital solutions and technology services company',
      requiredSkills: ['Java', 'JavaScript', 'Cloud', 'DevOps'],
      preferredSkills: ['AI/ML', 'Microservices', 'React', 'Node.js'],
      industry: 'IT Services',
      location: 'Pune, India',
      roles: ['Full Stack Developer', 'DevOps Engineer', 'Cloud Architect']
    },
    {
      id: '24',
      name: 'Happiest Minds',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300',
      description: 'Digital transformation and IT solutions provider',
      requiredSkills: ['Java', 'JavaScript', 'Cloud', 'DevOps'],
      preferredSkills: ['IoT', 'AI/ML', 'Blockchain', 'Security'],
      industry: 'IT Services',
      location: 'Bangalore, India',
      roles: ['Software Engineer', 'Security Specialist', 'Cloud Architect']
    },
    {
      id: '25',
      name: 'Sonata Software',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300',
      description: 'IT consulting and software services company',
      requiredSkills: ['Java', '.NET', 'Cloud', 'JavaScript'],
      preferredSkills: ['Microsoft Dynamics', 'DevOps', 'AI/ML', 'React'],
      industry: 'IT Services',
      location: 'Bangalore, India',
      roles: ['Software Engineer', 'Dynamics Consultant', 'Cloud Specialist']
    },
    {
      id: '26',
      name: 'Newgen Software',
      logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=300',
      description: 'Digital transformation platform provider',
      requiredSkills: ['Java', 'JavaScript', 'BPM', 'ECM'],
      preferredSkills: ['Low Code', 'RPA', 'Cloud', 'AI/ML'],
      industry: 'Software',
      location: 'Delhi, India',
      roles: ['Software Engineer', 'BPM Developer', 'Solution Architect']
    },
    {
      id: '27',
      name: 'Mastek',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300',
      description: 'Digital transformation and enterprise solutions provider',
      requiredSkills: ['Java', 'JavaScript', 'Cloud', 'Agile'],
      preferredSkills: ['DevOps', 'Microservices', 'AI/ML', 'React'],
      industry: 'IT Services',
      location: 'Mumbai, India',
      roles: ['Software Engineer', 'Scrum Master', 'Solution Architect']
    },
    {
      id: '28',
      name: 'NIIT Technologies',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300',
      description: 'Global IT solutions provider',
      requiredSkills: ['Java', 'Python', 'Cloud', 'JavaScript'],
      preferredSkills: ['AI/ML', 'DevOps', 'Microservices', 'React'],
      industry: 'IT Services',
      location: 'Greater Noida, India',
      roles: ['Software Engineer', 'Data Scientist', 'Cloud Architect']
    },
    {
      id: '29',
      name: 'Ramco Systems',
      logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=300',
      description: 'Enterprise software provider specializing in ERP solutions',
      requiredSkills: ['Java', 'JavaScript', 'ERP', 'Cloud'],
      preferredSkills: ['AI/ML', 'HR Tech', 'Logistics', 'Aviation'],
      industry: 'Enterprise Software',
      location: 'Chennai, India',
      roles: ['Software Engineer', 'ERP Consultant', 'Product Manager']
    },
    {
      id: '30',
      name: 'Tata Elxsi',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300',
      description: 'Design and technology services provider',
      requiredSkills: ['Embedded', 'IoT', 'Automotive', 'Media'],
      preferredSkills: ['5G', 'AI/ML', 'Cloud', 'DevOps'],
      industry: 'Technology Services',
      location: 'Bangalore, India',
      roles: ['Embedded Engineer', 'Automotive Engineer', 'Media Tech Developer']
    }
  ];

const commonSkills = [
  'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python',
  'Java', 'C++', 'AWS', 'Docker', 'Kubernetes', 'SQL',
  'Git', 'REST API', 'GraphQL', 'HTML', 'CSS' , 'AI' , 'ML' , 'C' , 'DBMS' 
];

function calculateMatchScore(userSkills, company) {
  const requiredMatches = company.requiredSkills.filter(skill => 
    userSkills.includes(skill)
  ).length;
  const preferredMatches = company.preferredSkills.filter(skill => 
    userSkills.includes(skill)
  ).length;

  const requiredWeight = 0.7;
  const preferredWeight = 0.3;

  const requiredScore = (requiredMatches / company.requiredSkills.length) * requiredWeight * 100;
  const preferredScore = (preferredMatches / company.preferredSkills.length) * preferredWeight * 100;

  return Math.round(requiredScore + preferredScore);
}

function SkillInput({ onSkillsChange }) {
  const [skills, setSkills] = useState([]);
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value.trim()) {
      const filtered = commonSkills.filter(skill =>
        skill.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const addSkill = (skill) => {
    if (skill && !skills.includes(skill)) {
      const newSkills = [...skills, skill];
      setSkills(newSkills);
      onSkillsChange(newSkills);
    }
    setInput('');
    setSuggestions([]);
  };

  const removeSkill = (skillToRemove) => {
    const newSkills = skills.filter(skill => skill !== skillToRemove);
    setSkills(newSkills);
    onSkillsChange(newSkills);
  };

  return (
    <div className="w-full">
      <div className="relative">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Add your skills..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {suggestions.length > 0 && (
          <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => addSkill(suggestion)}
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-2 mt-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="flex items-center gap-1 px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
          >
            {skill}
            <button
              onClick={() => removeSkill(skill)}
              className="p-0.5 hover:bg-blue-200 rounded-full"
            >
              <X size={14} />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}

function CompanyMatch({ company, matchScore, matchedSkills, missingSkills }) {
  const status = matchScore > 50 ? "Selected" : "Not Selected";

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center gap-4">
        <img
          src={company.logo}
          alt={company.name}
          className="w-16 h-16 object-cover rounded-lg"
        />
        <div>
          <h3 className="text-xl font-semibold">{company.name}</h3>
          <p className="text-gray-600">{company.industry} • {company.location}</p>
        </div>
        <div className="ml-auto text-right">
          <div className="text-2xl font-bold text-blue-600">{matchScore}%</div>
          <div className="text-sm text-gray-500">Match Score</div>
          <div
            className={`mt-2 px-3 py-1 text-sm font-bold rounded-full ${
              status === "Selected" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            {status}
          </div>
        </div>
      </div>

      <p className="mt-4 text-gray-700">{company.description}</p>

      <div className="mt-4">
        <h4 className="font-semibold text-gray-700">Suitable Roles:</h4>
        <div className="flex flex-wrap gap-2 mt-2">
          {company.roles.map((role) => (
            <span key={role} className="px-3 py-1 text-sm bg-gray-100 rounded-full">
              {role}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold text-green-700">Matched Skills</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {matchedSkills.map((skill) => (
              <span key={skill} className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-orange-700">Skills to Develop</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {missingSkills.map((skill) => (
              <span key={skill} className="px-3 py-1 text-sm bg-orange-100 text-orange-800 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


function Prediction() {
  const [userSkills, setUserSkills] = useState([]);

  const companyMatches = useMemo(() => {
    return companies.map(company => {
      const matchScore = calculateMatchScore(userSkills, company);
      const matchedSkills = [...company.requiredSkills, ...company.preferredSkills]
        .filter(skill => userSkills.includes(skill));
      const missingSkills = [...company.requiredSkills, ...company.preferredSkills]
        .filter(skill => !userSkills.includes(skill));

      return {
        company,
        matchScore,
        matchedSkills,
        missingSkills,
      };
    }).sort((a, b) => b.matchScore - a.matchScore);
  }, [userSkills]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center gap-2">
            <Briefcase className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Career Match</h1>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Enter Your Skills</h2>
          <SkillInput onSkillsChange={setUserSkills} />
        </div>

        <div className="mt-8 space-y-6">
          {companyMatches.map(({ company, matchScore, matchedSkills, missingSkills }) => (
            <CompanyMatch
              key={company.id}
              company={company}
              matchScore={matchScore}
              matchedSkills={matchedSkills}
              missingSkills={missingSkills}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Prediction;
