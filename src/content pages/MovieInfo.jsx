import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function MovieInfo() {
  // 1. Grab the exact "movieid" from your URL (this matches your Routes.jsx setup!)
  const { movieid } = useParams();

  // 2. Set up state to hold this single movie's data
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // grab and store reviews
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);

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

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!reviewText.trim()) return;

    const newReview = {
      id: Date.now(),
      text: reviewText,
      date: new Date().toLocaleDateString(),
    };

    setReviews([newReview, ...reviews]);
    setReviewText("");
  };

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

        {/* REVIEW SECTION - Moved outside the technical details div */}
        <div className="mt-12 w-full text-left border-t border-gray-700 pt-8">
          <h3 className="text-2xl font-bold mb-4">Reviews</h3>

          <form onSubmit={handleAddReview} className="mb-8">
            <textarea
              className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none"
              placeholder="Write your thoughts on this film..."
              rows="3"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />
            <button
              type="submit"
              className="mt-2 px-6 py-2 bg-red-600 hover:bg-red-500 rounded-lg font-semibold transition-colors"
            >
              Post Review
            </button>
          </form>

          <div className="space-y-4">
            {reviews.length === 0 ? (
              <p className="text-gray-500 italic">No Reviews.</p>
            ) : (
              reviews.map((r) => (
                <div
                  key={r.id}
                  className="p-4 bg-gray-800/50 rounded-lg border border-gray-700"
                >
                  <p className="text-gray-200">{r.text}</p>
                  <span className="text-xs text-gray-500 mt-2 block">
                    {r.date}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
