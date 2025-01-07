import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App"; // Ensure the correct path for App
import Cmp from "./companies.jsx"; // Import the cmp component
import Rats from"./resume_ats.jsx";
import Mock from "./mock.tsx"
import Joby from "./joby.tsx";
import Chatbot from "./Chat.jsx"
import CompanyPapers from "./papers.jsx"
import Ft from "./ft.tsx";
import Dsa from "./Dsa.tsx";
import Prediction from "./prediction.tsx";
import About from  "./about.tsx"
import "./index.css";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* Default route */}
        <Route path="/companies" element={<Cmp/>} /> {/* Route for companies */}
        <Route path="/resume-screening" element={<Rats/>} /> {/* Route for resume_ats */}
        <Route path="/mock-tests" element={<Mock/>} /> {/* Route for mock */}
        <Route path="/jobs" element={<Joby/>}/>
        <Route path="/chatbot" element={<Chatbot/>}/>
        <Route path="/previous-papers" element={<CompanyPapers/>}/>
        <Route path="/future-trends" element={<Ft/>}/>
        <Route path="/dsa-practice" element={<Dsa/>}/>
        <Route path="/prediction" element={<Prediction/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
  </StrictMode>
);
