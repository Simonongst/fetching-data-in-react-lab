import { useState } from "react";

const StarshipSearch = ({ onSearch, onReset, resultCount, prevSearchTerm }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
    setSearchTerm("");
  };

  const showResetButton = prevSearchTerm !== "";

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

        {showResetButton && (
          <div><button onClick={onReset}>Show all starships</button></div>
        )}
      </form>
      {prevSearchTerm && (
        <p>
          Last search: <strong>{prevSearchTerm}</strong>
        </p>
      )}
      <h3>Starships</h3>
      <p>
        Number of results: {resultCount}
      </p>
      <p>
        {prevSearchTerm
          ? <>Last search: <strong>{prevSearchTerm}</strong></>
          : 'Search for a starship by name.'}
      </p>
    </div>
  );
};

export default StarshipSearch;
