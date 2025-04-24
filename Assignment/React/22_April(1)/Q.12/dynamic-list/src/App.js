import React from "react";

const App = () => {
  const items = ["React", "JavaScript", "CSS"];
  return (
    <div>
      <h1>Dynamic List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;