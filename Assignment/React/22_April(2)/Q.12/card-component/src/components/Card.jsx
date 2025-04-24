import React from "react";

const Card = ({ title, children }) => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #1e3c72, #2a5298)", // Gradient background for extra flair
        color: "#fff", // White text for better contrast
        border: "none", // Removed borders for a sleek look
        borderRadius: "15px", // More rounded corners
        padding: "20px",
        margin: "15px",
        maxWidth: "350px",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)", // Elevated shadow for a modern feel
        fontFamily: "'Roboto', sans-serif", // Clean and trendy font
        transition: "transform 0.3s ease-in-out", // Smooth hover effect
        cursor: "pointer",
        transform: "scale(1)", // Default scale
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <h3 style={{ margin: "0 0 10px 0" }}>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default Card;
