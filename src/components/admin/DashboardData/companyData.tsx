import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import axios from "axios"

const CompanyList: React.FC = () => {
  const [companies, setCompanies] = useState<any[]>([])
  const [selectedCompany, setSelectedCompany] = useState<any | null>(null)

  useEffect(() => {
    fetchCompanies()
  }, [])

  const fetchCompanies = async () => {
    try {
      const response = await axios.get("https://placement-portal-backend-e74c.onrender.com/api/company")
      setCompanies(response.data)
    } catch (error) {
      console.error("Error fetching companies:", error)
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`https://placement-portal-backend-e74c.onrender.com/api/company/${id}`)
      setCompanies(companies.filter((company) => company._id !== id))
    } catch (error) {
      console.error("Error deleting company:", error)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
    

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <AnimatePresence>
          {companies.map((company) => (
            <motion.div
              key={company._id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={company.logo || "/placeholder.svg"}
                alt={company.name}
                className="w-full h-32 object-contain p-4"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold mb-2">{company.name}</h3>
                <div className="flex justify-between mt-4">
                  <button
                    className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                    onClick={() => setSelectedCompany(company)}
                  >
                    View Details
                  </button>
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                    onClick={() => handleDelete(company._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {companies.length === 0 && <p className="text-center text-gray-500 mt-8">No companies found.</p>}

      <AnimatePresence>
        {selectedCompany && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCompany(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 15 }}
              className="bg-white rounded-lg p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4">{selectedCompany.name}</h2>
              <p className="mb-2">
                <strong>Recruitment Process:</strong> {selectedCompany.process}
              </p>
              <p className="mb-4">
                <strong>Requirements:</strong> {selectedCompany.requirements}
              </p>
              <a
                href={selectedCompany.recruitmentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Learn More
              </a>
              <button
                className="mt-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                onClick={() => setSelectedCompany(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CompanyList

