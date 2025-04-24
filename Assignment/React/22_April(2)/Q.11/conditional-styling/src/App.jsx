import React, { useState } from "react";

const ColorToggleButton = () => {
  const [isBlue, setIsBlue] = useState(true);

  // Function to toggle color
  const toggleColor = () => {
    setIsBlue(!isBlue);
  };

  return (
    <button
      onClick={toggleColor}
      style={{
        backgroundColor: isBlue ? "blue" : "red",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Color: {isBlue ? "Blue" : "Red"}
    </button>
  );
};

export default ColorToggleButton;