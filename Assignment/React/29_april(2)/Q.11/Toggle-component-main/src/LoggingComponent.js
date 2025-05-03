import React, { useEffect } from 'react';

function LoggingComponent() {
  useEffect(() => {
    console.log('Component Mounted');

    return () => {
      console.log('Component Unmounted');
    };
  }, []);

  return <div>I am the Logging Component</div>;
}

export default LoggingComponent;
