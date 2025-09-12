import { useState } from "react";

const StarshipSearch = ({ onSearch, onReset, resultCount, prevSearchTerm }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
    setSearchTerm("");
  };

  return (
    <div>
      <h1>Star Wars API</h1>
      <h3>Search</h3>
      <form onSubmit={handleSubmit}>
        <p>Search Term:</p>
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">
          {prevSearchTerm === "" ? "Search" : "Show all starships"}
        </button>
      </form>
      {prevSearchTerm && <p>Last search: {prevSearchTerm}</p>}
      <h3>Starships</h3>
      <p>Number of results: {resultCount}</p>
      <p>
        {prevSearchTerm ? (
          <>
            Last search: <strong>{prevSearchTerm}</strong>
          </>
        ) : (
          "Search for a starship by name."
        )}
      </p>
    </div>
  );
};

export default StarshipSearch;
