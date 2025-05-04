import { useState } from 'react';
import TopSection from './components/TopSection';
import MainSection from './components/MainSection';
import BottomSection from './components/BottomSection';

function App() {
  const [userName, setUserName] = useState('');

  return (
    <div className="app">
      <h1>Props Drilling Example</h1>
      
      <div className="input-container">
        <label htmlFor="name-input">Enter your name: </label>
        <input
          id="name-input"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      
      <TopSection userName={userName} />
      <MainSection userName={userName} />
      <BottomSection userName={userName} />
    </div>
  );
}

export default App;