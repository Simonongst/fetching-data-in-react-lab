import "./App.css";
import * as starshipService from "./services/starshipService";
import StarshipSearch from "./components/StarshipSearch/StarshipSearch";
import StarshipList from "./components/StarshipList/StarshipList";
import { useState, useEffect } from "react";

const App = () => {
  const [starshipsData, setStarshipsData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);
  const [prevSearchTerm, setPrevSearchTerm] = useState("");

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const data = await starshipService.index();
        setStarshipsData(data);
        setDisplayedStarships(data);
      } catch (error) {
        console.error("Failed to load starships:", error);
      }
    };
    fetchStarships();
  }, []);

  const handleSearch = (term) => {
    const filtered = starshipsData.filter((ship) => {
      return ship.name.toLowerCase().includes(term.toLowerCase());
    });
    setDisplayedStarships(filtered);
    setPrevSearchTerm(term);
  };

  return (
    <div>
      <StarshipSearch onSearch={handleSearch} resultCount={displayedStarships.length} prevSearchTerm={prevSearchTerm} />
      <StarshipList displayedStarships={displayedStarships} />
    </div>
  );
};

export default App;
