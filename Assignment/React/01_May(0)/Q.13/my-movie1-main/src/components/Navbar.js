import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="navbar">
      <Link to="/" className={`nav-link ${location.pathname === '/' || location.pathname === '/movies' ? 'active' : ''}`}>
        View Movies
      </Link>
      <Link to="/add-movie" className={`nav-link ${location.pathname === '/add-movie' ? 'active' : ''}`}>
        Add Movie
      </Link>
    </nav>
  );
}

export default Navbar;