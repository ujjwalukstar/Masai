import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header style={{
      backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
      color: theme === 'light' ? '#333' : '#f0f0f0',
      padding: '1rem',
      textAlign: 'center'
    }}>
      <h1>Theme Context Demo</h1>
      <button onClick={toggleTheme}>
        Toggle Theme (Current: {theme})
      </button>
    </header>
  );
};

export default Header;