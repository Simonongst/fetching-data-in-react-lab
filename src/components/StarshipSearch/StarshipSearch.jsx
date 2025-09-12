import { useState } from "react";

const StarshipSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [prevSearchTerm, setPrevSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
    setPrevSearchTerm(searchTerm);
    setSearchTerm("");
  };

  return (
    <div>
      <h3>Search</h3>
      Search Term:
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {prevSearchTerm && (
        <p>
          Last search: <strong>{prevSearchTerm}</strong>
        </p>
      )}
    </div>
  );
};

export default StarshipSearch;
