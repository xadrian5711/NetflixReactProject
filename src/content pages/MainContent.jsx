import Header from "../components/Header";

export default function MainContent({
  movies,
  isLoading,
  error,
  setSearchTerm,
}) {
  return (
    <div className="flex-1 flex flex-col relative h-full overflow-hidden">
      <Header setSearchTerm={setSearchTerm} />
      <div className="flex-1 overflow-y-auto p-8 pt-0">
        {/* 1. Handle Loading/Error States */}
        {isLoading && <p className="text-white/50">Searching for movies...</p>}
        {error && <p className="text-red-500/80">Error: {error}</p>}

        {/* 2. Grid for Movie Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {movies?.map((movie) => (
            <div key={movie.imdbID} className="group cursor-pointer">
              <div className="relative aspect-2/3 rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                <img
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : "https://via.placeholder.com/300x450"
                  }
                  alt={movie.Title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="mt-3">
                <h3 className="text-sm font-semibold truncate">
                  {movie.Title}
                </h3>
                <p className="text-xs text-gray-400">{movie.Year}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 3. Empty State */}
        {!isLoading && movies?.length === 0 && !error && (
          <div className="text-center mt-20 text-gray-500">
            <p>Search for your favorite movies above!</p>
          </div>
        )}
      </div>
    </div>
  );
}
