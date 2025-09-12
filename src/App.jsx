import './App.css'
import * as starshipService from './services/starshipService'
import StarshipSearch from './components/StarshipSearch/StarshipSearch'
import StarshipList from './components/StarshipList/StarshipList';
import {useState, useEffect} from 'react'

const App = () => {
  const [starshipsData, setStarshipsData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const data = await starshipService.index();
        setStarshipsData(data);
        setDisplayedStarships(data);
      } catch (error) {
        console.error('Failed to load starships:', error);
      }
    };
    fetchStarships();
  }, [])

  const handleSearch = (term) => {
    const filtered = starshipsData.filter((ship) => {
      ship.name.toLowerCase().includes(term.toLowerCase());
    })
    setDisplayedStarships(filtered);
  }

  return (
    <div>
      <StarshipSearch onSearch={handleSearch}/>
      <StarshipList displayedStarships={displayedStarships}/>
    </div>
  );
}

export default App
