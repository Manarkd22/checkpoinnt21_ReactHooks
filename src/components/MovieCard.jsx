const MovieCard = ({ movie }) => {
  const getRatingBadgeClass = (rating) => {
    if (rating >= 8) return 'bg-success';     // Vert pour les excellentes notes (8+)
    if (rating >= 6) return 'bg-warning';     // Jaune pour les bonnes notes (6-7.9)
    return 'bg-danger';                       // Rouge pour les mauvaises notes (< 6)
  };

  return (
    <div className="card h-100 shadow-sm movie-card-custom">
      {/* Image du poster du film avec gestion d'erreur */}
      <img
        src={movie.posterURL}
        alt={movie.title}
        className="card-img-top"
        style={{ height: '300px', objectFit: 'cover' }}
        onError={(e) => {
          // En cas d'erreur de chargement, affiche une image placeholder
          e.target.src = 'https://via.placeholder.com/280x300?text=No+Image';
        }}
      />
      <div className="card-body d-flex flex-column">
        {/* Titre du film avec troncature si trop long */}
        <h5 className="card-title text-truncate">{movie.title}</h5>

        {/* Description avec limitation à 2 lignes et troncature */}
        <p className="card-text flex-grow-1" style={{
          fontSize: '0.9rem',
          display: '-webkit-box',
          WebkitLineClamp: 2,           // Limite à 2 lignes
          WebkitBoxOrient: 'vertical', // Orientation verticale
          overflow: 'hidden'           // Masque le texte dépassant
        }}>
          {movie.description}
        </p>

        {/* Section de notation en bas de la carte */}
        <div className="d-flex justify-content-between align-items-center mt-3">
          {/* Badge coloré selon la note du film */}
          <span className={`badge ${getRatingBadgeClass(movie.note)} text-white`}>
            {movie.note.toFixed(1)}/10  {/* Affiche la note avec 1 décimale */}
          </span>
          <small className="text-muted">Rating</small>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;