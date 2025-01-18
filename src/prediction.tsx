"use client"

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import { companies, commonSkills, Company } from './data/prediction';

function calculateMatchScore(userSkills: string[], company: Company): number {
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

function SkillInput({ onSkillsChange }: { onSkillsChange: (skills: string[]) => void }) {
  const [skills, setSkills] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const addSkill = (skill: string) => {
    if (skill && !skills.includes(skill)) {
      const newSkills = [...skills, skill];
      setSkills(newSkills);
      onSkillsChange(newSkills);
    }
    setInput('');
    setSuggestions([]);
  };

  const removeSkill = (skillToRemove: string) => {
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
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        />
        <AnimatePresence>
          {suggestions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto"
            >
              {suggestions.map((suggestion) => (
                <motion.button
                  key={suggestion}
                  onClick={() => addSkill(suggestion)}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors duration-200"
                  whileHover={{ backgroundColor: '#f3f4f6' }}
                >
                  {suggestion}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="flex flex-wrap gap-2 mt-3">
        <AnimatePresence>
          {skills.map((skill) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex items-center gap-1 px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
            >
              {skill}
              <button
                onClick={() => removeSkill(skill)}
                className="p-0.5 hover:bg-blue-200 rounded-full transition-colors duration-200"
              >
                <X size={14} />
              </button>
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

function CompanyMatch({ company, matchScore, matchedSkills, missingSkills }: {
  company: Company;
  matchScore: number;
  matchedSkills: string[];
  missingSkills: string[];
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const status = matchScore > 50 ? "Selected" : "Not Selected";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-4 sm:p-6 bg-white rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <img
          src={company.logo || "/placeholder.svg"}
          alt={company.name}
          className="w-16 h-16 object-cover rounded-lg"
        />
        <div className="flex-grow">
          <h3 className="text-lg sm:text-xl font-semibold">{company.name}</h3>
          <p className="text-sm text-gray-600">{company.industry} • {company.location}</p>
        </div>
        <div className="w-full sm:w-auto flex justify-between sm:flex-col items-end">
          <div className="text-2xl font-bold text-blue-600">{matchScore}%</div>
          <motion.div
            className={`px-3 py-1 text-sm font-bold rounded-full ${
              status === "Selected" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            {status}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : 0 }}
        className="overflow-hidden"
      >
        <p className="mt-4 text-sm sm:text-base text-gray-700">{company.description}</p>

        <div className="mt-4">
          <h4 className="font-semibold text-gray-700">Suitable Roles:</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {company.roles.map((role) => (
              <span key={role} className="px-3 py-1 text-xs sm:text-sm bg-gray-100 rounded-full">
                {role}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4">
          <div>
            <h4 className="font-semibold text-green-700">Matched Skills</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {matchedSkills.map((skill) => (
                <span key={skill} className="px-3 py-1 text-xs sm:text-sm bg-green-100 text-green-800 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-orange-700">Skills to Develop</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {missingSkills.map((skill) => (
                <span key={skill} className="px-3 py-1 text-xs sm:text-sm bg-orange-100 text-orange-800 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
      >
        {isExpanded ? (
          <>
            <ChevronUp size={20} />
            <span className="ml-1">Show Less</span>
          </>
        ) : (
          <>
            <ChevronDown size={20} />
            <span className="ml-1">Show More</span>
          </>
        )}
      </button>
    </motion.div>
  );
}

export default function Prediction() {
  const [userSkills, setUserSkills] = useState<string[]>([]);

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
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2">
            <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Career Match</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Enter Your Skills</h2>
          <SkillInput onSkillsChange={setUserSkills} />
        </div>

        <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
          <AnimatePresence>
            {companyMatches.map(({ company, matchScore, matchedSkills, missingSkills }) => (
              <CompanyMatch
                key={company.id}
                company={company}
                matchScore={matchScore}
                matchedSkills={matchedSkills}
                missingSkills={missingSkills}
              />
            ))}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}