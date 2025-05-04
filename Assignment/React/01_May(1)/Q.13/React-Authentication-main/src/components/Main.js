import { useAuth } from '../context/AuthContext';

const Main = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    <main style={{
      padding: '2rem',
      minHeight: '300px',
      textAlign: 'center'
    }}>
      <h2>
        {isAuthenticated 
          ? 'You are logged in!' 
          : 'You are not logged in. Click the login button in the navbar.'}
      </h2>
    </main>
  );
};

export default Main;