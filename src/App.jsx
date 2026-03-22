import { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";

export default function App() {
  // État pour stocker la liste des films
  // Chaque film contient : title, description, posterURL, note
  const [movies, setMovies] = useState([
  {
    title: "Toy Story",
    description: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
    posterURL: "src/assets/image1.jpg",
    note: 8.3,
  },
  {
    title: "Luca",
    description: "A young sea monster experiences an unforgettable summer filled with gelato, pasta, and scooter rides while hiding his identity.",
    posterURL: "src/assets/images2.jfif",
    note: 7.4,
  },
]);

  // États pour les filtres de recherche
  const [filterTitle, setFilterTitle] = useState(""); 
  const [filterNote, setFilterNote] = useState("");   

  // Fonction pour ajouter un nouveau film à la collection
  const addMovie = (movie) => {
    setMovies([...movies, movie]); // Ajoute le nouveau film au tableau existant
  };

  // Logique de filtrage des films selon les critères de recherche
  const filteredMovies = movies.filter((movie) => {
    // Vérifie si le titre du film contient le texte de recherche
    const matchTitle = movie.title
      .toLowerCase()
      .includes(filterTitle.toLowerCase());

    // Vérifie si la note du film est supérieure ou égale à la note filtrée
    const matchNote = filterNote
      ? movie.note >= Number(filterNote) // Convertit filterNote en nombre pour la comparaison
      : true; // Si pas de filtre note, accepte tous les films


    return matchTitle && matchNote;
  });

  return (
    <div className="bootstrap-app">
    // Conteneur principal de l'application avec classes Bootstrap
    <div className="bootstrap-app">
      {/* Section header*/}
      <header className="header-section bg-dark text-white py-5 mb-5">
        <div className="container">
          <h1 className="display-4 fw-bold mb-2 text-white">FilmVault</h1>
          <p className="lead text-muted">Discover and curate your collection of cinematic masterpieces</p>
        </div>
      </header>

      {/* Section principale contenant tous les composants fonctionnels */}
      <main className="container mb-5">
        <div className="row g-4">
          {/* Carte pour ajouter un nouveau film */}
          <div className="col-lg-12">
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-header bg-primary text-white">
                <h2 className="card-title mb-0">Add New Film</h2>
              </div>
              <div className="card-body">
                <AddMovie addMovie={addMovie} />
              </div>
            </div>
          </div>

          {/* Carte pour les filtres de recherche */}
          <div className="col-lg-12">
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-header bg-info text-white">
                <h2 className="card-title mb-0">Search & Filter</h2>
              </div>
              <div className="card-body">
                <Filter setFilterTitle={setFilterTitle} setFilterNote={setFilterNote} />
              </div>
            </div>
          </div>

          {/* Carte affichant la collection de films filtrés */}
          <div className="col-lg-12">
            <div className="card shadow-sm border-0">
              <div className="card-header bg-success text-white d-flex justify-content-between align-items-center">
                <h2 className="card-title mb-0">Your Collection</h2>
                {/* Badge affichant le nombre de films filtrés */}
                <span className="badge bg-light text-dark fs-6">{filteredMovies.length} films</span>
              </div>
              <div className="card-body">
                <MovieList movies={filteredMovies} />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Pied de page avec copyright */}      
      <footer className="bg-dark text-white text-center py-4 mt-5">
        <p className="mb-0">&copy; 2024 FilmVault. Your cinema collection awaits.</p>
      </footer>
    </div>
    </div>
  );
}