import { useMovies } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';
import './Movies.css';

function Movies() {
  const { movies, loading, deleteMovie } = useMovies();

  if (loading) return <div className="loading">Loading movies...</div>;

  return (
    <div className="movies">
      <h1>Movie Collection</h1>
      {movies.length === 0 ? (
        <p className="no-movies">No movies found. Add some movies to get started!</p>
      ) : (
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard 
              key={movie.id} 
              movie={movie} 
              onDelete={deleteMovie}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Movies;