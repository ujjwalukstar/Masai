import React from "react";

const Header = ({ title, description }) => {
  return (
    <div style={{ textAlign: "center", marginBottom: "30px" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#333", margin: "0" }}>{title}</h1>
      <p style={{ fontSize: "1rem", color: "gray", margin: "10px 0 0" }}>
        {description}
      </p>
    </div>
  );
};

export default Header;