import React, { useState } from 'react';
import LoggingComponent from './LoggingComponent';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Component
      </button>
      <hr />
      {isVisible && <LoggingComponent />}
    </div>
  );
}

export default App;
