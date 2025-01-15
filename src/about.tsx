import React from 'react';
import { Github, Linkedin, Mail, Users } from 'lucide-react';

const teamMembers = [
    {
      name: "Mudunuri Ashritha",
      role: "Team Lead & Full Stack Developer",
      bio: "Leading the technical architecture and development of the placement portal.",
      social: {
        linkedin: "#",
        github: "#",
        email: "sarah@example.com"
      }
    },
    {
      name: "Angarapu Eswari Akshaya",
      role: "UI/UX Designer",
      bio: "Creating intuitive and beautiful user experiences for our platform.",
      social: {
        linkedin: "#",
        github: "#",
        email: "emily@example.com"
      }
    },
    {
      name: " Pidakaala Susmitha",
      role: "Backend Developer",
      bio: "Implementing robust backend solutions and API integrations.",
      social: {
        linkedin: "#",
        github: "#",
        email: "priya@example.com"
      }
    },
    {
      name: "Telagarapu Chinamayi Sai",
      role: "Data Scientist",
      bio: "Developing AI algorithms for predictive analytics and assessments.",
      social: {
        linkedin: "#",
        github: "#",
        email: "lisa@example.com"
      }
    },
    {
      name: "Donka Deepthika",
      role: "Quality Assurance",
      bio: "Ensuring the highest quality standards across all features.",
      social: {
        linkedin: "#",
        github: "#",
        email: "maya@example.com"
      }
    }
  ];
  

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Users size={32} className="text-indigo-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-800">Our Team</h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the talented individuals behind our college placement portal
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-indigo-600 font-medium">{member.role}</p>
                </div>
                <div className="flex space-x-3">
                  <a href={member.social.linkedin} className="text-gray-500 hover:text-indigo-600">
                    <Linkedin size={18} />
                  </a>
                  <a href={member.social.github} className="text-gray-500 hover:text-indigo-600">
                    <Github size={18} />
                  </a>
                  <a href={`mailto:${member.social.email}`} className="text-gray-500 hover:text-indigo-600">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
              <p className="mt-3 text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            We're dedicated to revolutionizing the college placement experience through 
            innovative technology solutions, connecting students with opportunities and 
            empowering them for successful careers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;