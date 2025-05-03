import React, { useRef } from 'react';

function OTPInput() {
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!/^[0-9]?$/.test(value)) return; // Allow only a single digit

    e.target.value = value; // Set the current input
    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus(); // Move to next input
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus(); // Move to previous input
    }
  };

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputsRef.current[index] = el)}
            style={{
              width: '40px',
              height: '40px',
              textAlign: 'center',
              fontSize: '18px',
            }}
          />
        ))}
    </div>
  );
}

export default OTPInput;
