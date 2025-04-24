// Imperative approach: Adding "Hello, World!" to the DOM dynamically
const rootDiv = document.getElementById("root");
const pElement = document.createElement("p");
pElement.textContent = "Hello, World!";
rootDiv.appendChild(pElement);