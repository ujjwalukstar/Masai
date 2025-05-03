import React, { useState, useEffect } from 'react';

function StateLogger() {
  const [number, setNumber] = useState(0); // Initial state

  // Log the state whenever it changes
  useEffect(() => {
    console.log(`State updated: ${number}`);
  }, [number]);

  const generateRandomNumber = () => {
    const random = Math.floor(Math.random() * 100); // Random number between 0–99
    setNumber(random);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Current Number: {number}</h1>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
    </div>
  );
}

export default StateLogger;
