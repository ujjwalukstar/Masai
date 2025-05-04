import { useTheme } from '../context/ThemeContext';

const MainContent = () => {
  const { theme } = useTheme();
  
  return (
    <main style={{
      backgroundColor: theme === 'light' ? '#fff' : '#222',
      color: theme === 'light' ? '#333' : '#f0f0f0',
      padding: '2rem',
      minHeight: '300px'
    }}>
      <h2>Main Content</h2>
      <p>This content is displayed in {theme} mode.</p>
      <p>The current theme is applied through React Context.</p>
    </main>
  );
};

export default MainContent;