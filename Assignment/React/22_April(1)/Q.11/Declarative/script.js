// Declarative approach: Render "Hello, World!" using React
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);