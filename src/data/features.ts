

import { 
  Building, Brain, MessageSquare, FileCheck, Briefcase, 
  BookOpen, Code, TrendingUp 
} from 'lucide-react';

export const features = [
  {
    icon: Building,
    title: 'Company Recruitment',
    description: 'Access detailed company-specific recruitment processes and requirements',
    buttonText: 'View Companies',
    link: '/companies' // Add a link or route here
  },
  {
    icon: Brain,
    title: 'AI Resume Screening',
    description: 'Get instant feedback on your resume with our AI-powered screening tool',
    buttonText: 'Screen Resume',
    link: '/resume-screening'
  },
  {
    icon: MessageSquare,
    title: 'Chatbot',
    description: '24/7 assistance for all your placement-related queries',
    buttonText: 'Start Chat',
    link: '/chatbot'
  },
  {
    icon: FileCheck,
    title: 'Mock Tests',
    description: 'Practice with industry-standard mock tests and interviews',
    buttonText: 'Take Test',
    link: '/mock-tests'
  },
  {
    icon: Briefcase,
    title: 'Job Portal',
    description: 'Access to exclusive off-campus jobs and internship opportunities',
    buttonText: 'Browse Jobs',
    link: '/jobs'
  },
  {
    icon: BookOpen,
    title: 'Previous Papers',
    description: 'Study from previous year papers with detailed solutions',
    buttonText: 'View Papers',
    link: '/previous-papers'
  },
  {
    icon: Code,
    title: 'DSA Practice',
    description: 'Comprehensive DSA and aptitude practice platform',
    buttonText: 'Practice Now',
    link: '/dsa-practice'
  },
  {
    icon: TrendingUp,
    title: 'Future Trends',
    description: 'Stay updated with industry trends and alumni experiences',
    buttonText: 'Explore Trends',
    link: '/future-trends'
  }
];
