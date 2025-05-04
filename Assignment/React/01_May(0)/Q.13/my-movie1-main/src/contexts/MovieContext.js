import { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, doc, updateDoc, deleteDoc, onSnapshot } from 'firebase/firestore';

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'movies'), (snapshot) => {
      const moviesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMovies(moviesData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const addMovie = async (movie) => {
    await addDoc(collection(db, 'movies'), movie);
  };

  const updateMovie = async (id, updatedMovie) => {
    await updateDoc(doc(db, 'movies', id), updatedMovie);
  };

  const deleteMovie = async (id) => {
    await deleteDoc(doc(db, 'movies', id));
  };

  return (
    <MovieContext.Provider value={{ movies, loading, addMovie, updateMovie, deleteMovie }}>
      {children}
    </MovieContext.Provider>
  );
}

export function useMovies() {
  return useContext(MovieContext);
}