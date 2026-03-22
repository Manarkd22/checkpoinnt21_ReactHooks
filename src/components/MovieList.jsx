import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  // si aucun film n'est trouvé, afficher un message informatif
  if (movies.length === 0) {
    return (
      <div className="alert alert-info text-center py-5">
        <h5 className="alert-heading">No movies found</h5>
        <p className="mb-0">Try adjusting your search filters or add a new film!</p>
      </div>
    );
  }

  return (
    <div className="row g-4">
      {/* Mapping de chaque film vers une MovieCard */}
      {movies.map((movie, index) => (
        <div key={index} className="col-sm-6 col-md-4 col-lg-3">
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;