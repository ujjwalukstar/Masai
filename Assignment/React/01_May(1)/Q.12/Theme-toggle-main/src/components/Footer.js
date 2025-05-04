import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  
  return (
    <footer style={{
      backgroundColor: theme === 'light' ? '#f0f0f0' : '#111',
      color: theme === 'light' ? '#333' : '#f0f0f0',
      padding: '1rem',
      textAlign: 'center'
    }}>
      <p>Footer Content - {theme} mode</p>
    </footer>
  );
};

export default Footer;