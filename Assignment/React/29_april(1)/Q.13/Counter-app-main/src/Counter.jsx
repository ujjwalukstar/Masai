import React, { useState, useEffect } from 'react';
import './Counter.css'; // Optional styling

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Counter updated: ${count}`);
  }, [count]);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h2>Counter: {count}</h2>
      <div className="button-group">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
