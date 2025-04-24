import React from "react";
import Card from "./Card";

const App = () => {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
      <Card title="Welcome to Coolness!">
        <p>Now featuring the best designs in town.</p>
      </Card>
      <Card title="Level Up Your Style">
        <p>Who says cards can’t have swag?</p>
      </Card>
      <Card title="Dynamic & Trendy">
        <ul>
          <li>Gradient Colors</li>
          <li>Smooth Hover Effects</li>
          <li>Modern Fonts</li>
        </ul>
      </Card>
    </div>
  );
};

export default App;