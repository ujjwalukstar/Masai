import { Link } from 'react-router-dom';
import './MovieCard.css';

function MovieCard({ movie, onDelete }) {
  return (
    <div className="movie-card">
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p className="year">{movie.year}</p>
        <p className="description">{movie.description}</p>
      </div>
      <div className="movie-actions">
        <Link to={`/add-movie/${movie.id}`} className="btn edit-btn">Edit</Link>
        <button onClick={() => onDelete(movie.id)} className="btn delete-btn">Delete</button>
      </div>
    </div>
  );
}

export default MovieCard;