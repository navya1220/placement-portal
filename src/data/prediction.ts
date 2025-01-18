
export interface Company {
  id: string;
  name: string;
  logo: string;
  description: string;
  requiredSkills: string[];
  preferredSkills: string[];
  industry: string;
  location: string;
  roles: string[];
}

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



  export const commonSkills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python',
    'Java', 'C++', 'AWS', 'Docker', 'Kubernetes', 'SQL',
    'Git', 'REST API', 'GraphQL', 'HTML', 'CSS', 'AI', 'ML', 'C', 'DBMS'
  ];
  