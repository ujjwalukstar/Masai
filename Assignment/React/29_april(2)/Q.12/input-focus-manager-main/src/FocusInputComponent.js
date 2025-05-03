import React, { useRef } from 'react';

function FocusInputComponent() {
  
  const inputRef = useRef(null);

 
  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div style={{ padding: '20px' }}>
      <input ref={inputRef} type="text" placeholder="Click the button to focus me" />
      <button onClick={handleFocus} style={{ marginLeft: '10px' }}>
        Focus Input
      </button>
    </div>
  );
}

export default FocusInputComponent;
