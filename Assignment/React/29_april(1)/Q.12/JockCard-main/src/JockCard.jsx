import React, { useState, useEffect } from 'react';
import "./JockCard.css"; 

const JokeCard = () => {
  const [joke, setJoke] = useState(null);
  const [reload, setReload] = useState(0); // Trigger useEffect on change

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await response.json();
        setJoke(data);
      } catch (error) {
        console.error('Failed to fetch joke:', error);
      }
    };

    fetchJoke();
  }, [reload]);

  const handleNewJoke = () => {
    setReload(prev => prev + 1); // Trigger re-fetch
  };

  return (
    <div className="joke-card">
      {joke ? (
        <>
          <h3>{joke.setup}</h3>
          <p>{joke.punchline}</p>
        </>
      ) : (
        <p>Loading joke...</p>
      )}
      <button onClick={handleNewJoke}>Get Another Joke</button>
    </div>
  );
};

export default JokeCard;
