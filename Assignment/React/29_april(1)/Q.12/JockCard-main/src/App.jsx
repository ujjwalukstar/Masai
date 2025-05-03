import React from 'react';
import JokeCard from './JockCard';
import "./App.css"; 
function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Random Joke Generator</h1>
      <JokeCard />
    </div>
  );
}

export default App;
