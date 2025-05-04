import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MovieProvider } from './contexts/MovieContext';
import Navbar from './components/Navbar';
import AddMovie from './pages/AddMovie';
import Movies from './pages/Movies';
import './App.css';

function App() {
  return (
    <MovieProvider>
      <Router>
        <div className="app">
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/add-movie" element={<AddMovie />} />
              <Route path="/add-movie/:id" element={<AddMovie />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/" element={<Movies />} />
            </Routes>
          </div>
        </div>
      </Router>
    </MovieProvider>
  );
}

export default App;