import React, { useEffect, useRef } from 'react';

function ClickCounter() {
  const clickCount = useRef(0);

  useEffect(() => {
    console.log('Component Mounted');
  }, []);

  const handleClick = () => {
    clickCount.current += 1;
    console.log(`Button clicked ${clickCount.current} times`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default ClickCounter;
