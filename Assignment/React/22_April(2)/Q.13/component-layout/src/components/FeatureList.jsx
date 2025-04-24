import React from "react";

const FeatureList = ({ features }) => {
  return (
    <ul style={{ padding: "0", listStyleType: "none" }}>
      {features.map((feature, index) => (
        <li
          key={index}
          style={{ marginBottom: "8px", fontSize: "1rem", color: "black" }}
        >
          {feature}
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;