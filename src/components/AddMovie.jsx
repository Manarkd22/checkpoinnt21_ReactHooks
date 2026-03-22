import { useState } from "react";

const AddMovie = ({ addMovie }) => {
  // État local pour stocker les valeurs du formulaire
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    note: "",
  });

  // Gestionnaire de changement pour tous les champs du formulaire
  const handleChange = (e) => {
    // Met à jour l'état en conservant les autres valeurs
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Validation : titre et description sont obligatoires
    if (movie.title.trim() && movie.description.trim()) {
      // Appel de la fonction parent pour ajouter le film
      addMovie({
        ...movie,
        note: movie.note ? parseFloat(movie.note) : 0 // Convertit la note en nombre ou 0 si vide
      });

      // Réinitialisation du formulaire après ajout réussi
      setMovie({ title: "", description: "", posterURL: "", note: "" });
    } else {
      // Alerte si validation échoue
      alert("Please fill in at least title and description");
    }
  };

  return (
    // Formulaire avec gestionnaire de soumission
    <form onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-md-3">
          <input 
            type="text"
            name="title" 
            placeholder="Film title" 
            onChange={handleChange}
            value={movie.title}
            className="form-control"
            required
          />
        </div>
        <div className="col-md-3">
          <input 
            type="text"
            name="description" 
            placeholder="Description" 
            onChange={handleChange}
            value={movie.description}
            className="form-control"
            required
          />
        </div>
        <div className="col-md-3">
          <input 
            type="url"
            name="posterURL" 
            placeholder="Poster URL" 
            onChange={handleChange}
            value={movie.posterURL}
            className="form-control"
          />
        </div>
        <div className="col-md-2">
          <input 
            name="note" 
            type="number" 
            step="0.1"
            min="0" 
            max="10"
            placeholder="Rating (0-10)" 
            onChange={handleChange}
            value={movie.note}
            className="form-control"
          />
        </div>
        <div className="col-md-1">
          <button type="submit" className="btn btn-primary w-100">Add</button>
        </div>
      </div>
    </form>
  );
};

export default AddMovie;