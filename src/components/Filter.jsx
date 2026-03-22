const Filter = ({ setFilterTitle, setFilterNote }) => {
  return (
    <div className="row g-3">
      {/* Champ de recherche par titre */}
      <div className="col-md-6">
        <input
          type="text"
          className="form-control"
          placeholder="Search by title"
          onChange={(e) => setFilterTitle(e.target.value)}
        />
      </div>

      {/* Champ de filtrage par note minimum  */}
      <div className="col-md-6">
        <input
          type="number"
          className="form-control"
          placeholder="Minimum rating (0-10)"
          min="0"
          max="10"
          onChange={(e) => setFilterNote(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Filter;