import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, login, logout } = useAuth();
  
  return (
    <nav style={{
      backgroundColor: '#333',
      color: 'white',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <div>My App</div>
      <button 
        onClick={isAuthenticated ? logout : login}
        style={{
          padding: '0.5rem 1rem',
          cursor: 'pointer'
        }}
      >
        {isAuthenticated ? 'Logout' : 'Login'}
      </button>
    </nav>
  );
};

export default Navbar;