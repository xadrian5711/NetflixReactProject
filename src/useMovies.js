import { useState, useEffect } from "react";

export function useMovies(searchTerm) {
  const [Movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchTerm || searchTerm.length < 3) {
      setMovies([]);
      return;
    }

    const fetchMovies = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=82d5a3b3&s=${searchTerm}`,
        );
        const data = await response.json();

        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setError(data.Error);
          setMovies([]);
        }
      } catch (err) {
        setError("Failed to fetch movies. Check connection.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [searchTerm]);
  return { movies: Movies, isLoading, error };
}
