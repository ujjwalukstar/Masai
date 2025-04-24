import React, { useState } from "react";

const App = () => {
  const [reactUpdates, setReactUpdates] = useState(0);

  const handleReactUpdate = () => {
    setReactUpdates((prev) => prev + 1);
    const newTitle = `React Title ${reactUpdates + 1}`;
    document.title = newTitle; // Direct DOM title update for demonstration
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">React Title {reactUpdates}</h1>
      <button
        onClick={handleReactUpdate}
        className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
      >
        Change Title (React)
      </button>
      <p className="mt-2">React DOM Updates: {reactUpdates}</p>
    </div>
  );
};

export default App;