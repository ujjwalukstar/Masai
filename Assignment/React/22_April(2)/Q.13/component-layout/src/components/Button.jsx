import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        padding: "10px 20px",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
};

export default Button;