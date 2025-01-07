// Import necessary modules
import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";




const genAI = new GoogleGenerativeAI("AIzaSyCHhYU7FOp9HyzaKwTJL72qJdIsARyWaTk");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const chatbot = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State to track loading

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) {
      setResponse("Please enter a valid question.");
      return;
    }

    setIsLoading(true); // Set loading to true
    try {
      const result = await model.generateContent(prompt);
      if (result && result.response) {
        setResponse(result.response?.text || "Unexpected response structure.");
      } else {
        setResponse("No response received from the API.");
      }
    } catch (error) {
      console.error("Error fetching response:", error);
      setResponse(
        "An error occurred. Please check your API key or connection."
      );
    } finally {
      setIsLoading(false); // Set loading to false
      setPrompt(""); // Clear the input field
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: 0,
        padding: 0,
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          height: "90vh",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <header
          style={{
            backgroundColor: "#4e54c8",
            color: "white",
            textAlign: "center",
            padding: "20px",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          Placement AI Chatbot
        </header>
        <div
          style={{
            flexGrow: 1,
            padding: "20px",
            overflowY: "auto",
            backgroundColor: "#f9f9f9",
          }}
        >
          {response && (
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "15px",
              }}
            >
              <div
                style={{
                  maxWidth: "70%",
                  padding: "10px 15px",
                  backgroundColor: "#e9ecef",
                  color: "#333",
                  borderRadius: "12px",
                  lineHeight: "1.5",
                }}
              >
                {response}
              </div>
            </div>
          )}
        </div>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            padding: "10px",
            backgroundColor: "#ffffff",
            borderTop: "1px solid #ddd",
          }}
        >
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask a question about placements, programming, or roadmaps..."
            style={{
              flexGrow: 1,
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              fontSize: "1rem",
              resize: "none",
              height: "50px",
            }}
          />
          <button
            type="submit"
            disabled={isLoading}
            style={{
              marginLeft: "10px",
              backgroundColor: isLoading ? "#ccc" : "#4e54c8",
              color: isLoading ? "#999" : "white",
              fontSize: "1rem",
              border: "none",
              borderRadius: "8px",
              padding: "10px 20px",
              cursor: isLoading ? "not-allowed" : "pointer",
              transition: "background 0.3s",
            }}
          >
            {isLoading ? "Loading..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};


export default chatbot;
