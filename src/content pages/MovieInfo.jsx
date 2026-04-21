import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function MovieInfo() {
  // 1. Grab the exact "movieid" from your URL (this matches your Routes.jsx setup!)
  const { movieid } = useParams();

  // 2. Set up state to hold this single movie's data
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // 3. Fetch the movie details when the component loads
  useEffect(() => {
    const fetchSingleMovie = async () => {
      try {
        // Notice we are using "&i=" (for ID) instead of "&s=" (for search)!
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=82d5a3b3&i=${movieid}`,
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSingleMovie();
  }, [movieid]);

  // 4. Show a loading state while we fetch the data
  if (isLoading) {
    return (
      <div className="text-center text-white mt-10">
        Loading movie details...
      </div>
    );
  }

  // 5. Show an error if nothing comes back
  if (!movie || movie.Response === "False") {
    return (
      <div className="text-center text-red-500 mt-10">Movie not found!</div>
    );
  }

  // 6. Display your fully loaded movie!
  return (
    <div className="flex flex-col h-full overflow-y-auto items-center p-8 text-white no-scrollbar">
      {/* A quick back button to return to the search list */}
      <div className="w-full max-w-2xl mb-6">
        <Link to="/" className="text-blue-400 hover:text-blue-300">
          &larr; Back to Search
        </Link>
      </div>

      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450"
        }
        alt={movie.Title}
        className="w-64 max-w-sm rounded-xl shadow-2xl object-cover"
      />

      <div className="max-w-2xl text-center mt-6">
        <h2 className="text-4xl font-bold">{movie.Title}</h2>
        <p className="text-gray-400 text-lg mt-2">
          {movie.Year} • {movie.Rated} • {movie.Runtime}
        </p>

        {/* Because we fetched by ID, we now have access to the full plot! */}
        <p className="text-gray-200 mt-6 text-lg leading-relaxed">
          {movie.Plot}
        </p>

        <div className="mt-6 flex flex-col gap-2 text-sm text-gray-400">
          <p>
            <span className="font-bold text-gray-300">Director:</span>{" "}
            {movie.Director}
          </p>
          <p>
            <span className="font-bold text-gray-300">Starring:</span>{" "}
            {movie.Actors}
          </p>
          <p>
            <span className="font-bold text-gray-300">Genre:</span>{" "}
            {movie.Genre}
          </p>
        </div>
      </div>
    </div>
  );
}
