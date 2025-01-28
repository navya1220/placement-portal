import type React from "react"
import { useState, useEffect } from "react"
import { Users, Briefcase, Building } from "lucide-react"
import { motion } from "framer-motion"
import { JobCard, useJobs, type Job } from "./DashboardData/dashboardJob"
import axios from "axios"
import CompanyList from "./DashboardData/companyData"

const Dashboard: React.FC = () => {
  const [showDashboardJob, setShowDashboardJob] = useState(false)
  const [showCompanyList, setShowCompanyList] = useState(false)
  const { jobs, deleteJob, updateJob } = useJobs()
  const [activeJobCount, setActiveJobCount] = useState(0)
  const [companyCount, setCompanyCount] = useState(0)

  
  useEffect(() => {
    setActiveJobCount(jobs.length)
  }, [jobs])

  
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get("https://placement-portal-backend-e74c.onrender.com/api/company")
        setCompanyCount(response.data.length)
      } catch (error) {
        console.error("Error fetching companies:", error)
      }
    }
    fetchCompanies()
  }, [])

  const handleCardClick = (cardTitle: string) => {
    if (cardTitle === "Active Jobs") {
      setShowDashboardJob((prevState) => !prevState)
      setShowCompanyList(false)
    } else if (cardTitle === "Companies") {
      setShowCompanyList((prevState) => !prevState)
      setShowDashboardJob(false)
    }
  }

  const dashboardCards = [
    { title: "Active Jobs", icon: Briefcase, value: activeJobCount, color: "text-green-500" },
    { title: "Companies", icon: Building, value: companyCount, color: "text-purple-500" },
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h1 className="text-2xl font-semibold mb-6 text-blue-600">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dashboardCards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md border border-blue-100 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => handleCardClick(card.title)}
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-medium text-gray-600">{card.title}</h2>
              <card.icon className={`h-6 w-6 ${card.color}`} />
            </div>
            <p className="text-2xl font-bold text-blue-600">{card.value}</p>
          </motion.div>
        ))}
      </div>

      {showDashboardJob && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-6"
        >
          <h2 className="text-xl font-semibold mb-4 text-blue-600">Active Jobs</h2>
          <div className="space-y-4">
            {jobs.map((job: Job) => (
              <JobCard key={job.id} job={job} onDelete={deleteJob} onUpdate={updateJob} />
            ))}
          </div>
        </motion.div>
      )}

      {showCompanyList && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-6"
        >
          <h2 className="text-xl font-semibold mb-4 text-blue-600">Companies</h2>
          <CompanyList />
        </motion.div>
      )}
    </motion.div>
  )
}

export default Dashboard

