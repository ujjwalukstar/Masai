import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMovies } from '../contexts/MovieContext';
import './AddMovie.css';

function AddMovie() {
  const { id } = useParams();
  const { movies, addMovie, updateMovie } = useMovies();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    year: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (id) {
      const movieToEdit = movies.find(movie => movie.id === id);
      if (movieToEdit) {
        setFormData({
          title: movieToEdit.title,
          description: movieToEdit.description,
          year: movieToEdit.year
        });
      }
    }
  }, [id, movies]);

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.year) {
      newErrors.year = 'Year is required';
    } else if (isNaN(formData.year) ){
      newErrors.year = 'Year must be a number';
    } else if (formData.year < 1888 || formData.year > new Date().getFullYear() + 5) {
      newErrors.year = `Year must be between 1888 and ${new Date().getFullYear() + 5}`;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const movieData = {
      title: formData.title,
      description: formData.description,
      year: parseInt(formData.year)
    };

    if (id) {
      await updateMovie(id, movieData);
    } else {
      await addMovie(movieData);
    }
    navigate('/movies');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="add-movie">
      <h2>{id ? 'Edit Movie' : 'Add New Movie'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={errors.title ? 'error' : ''}
          />
          {errors.title && <span className="error-message">{errors.title}</span>}
        </div>
        
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={errors.description ? 'error' : ''}
          />
          {errors.description && <span className="error-message">{errors.description}</span>}
        </div>
        
        <div className="form-group">
          <label>Release Year</label>
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
            className={errors.year ? 'error' : ''}
          />
          {errors.year && <span className="error-message">{errors.year}</span>}
        </div>
        
        <button type="submit" className="submit-btn">
          {id ? 'Update Movie' : 'Add Movie'}
        </button>
      </form>
    </div>
  );
}

export default AddMovie;