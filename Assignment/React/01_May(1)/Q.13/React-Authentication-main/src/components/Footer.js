import { useAuth } from '../context/AuthContext';

const Footer = () => {
  const { isAuthenticated, user } = useAuth();
  
  return (
    <footer style={{
      backgroundColor: '#333',
      color: 'white',
      padding: '1rem',
      textAlign: 'center'
    }}>
      <p>
        {isAuthenticated 
          ? `Welcome, ${user.name}!` 
          : 'Please log in to access all features'}
      </p>
    </footer>
  );
};

export default Footer;