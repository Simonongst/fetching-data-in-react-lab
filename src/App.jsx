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

  return (
    <div>
      <StarshipSearch />
      <StarshipList starships={displayedStarships}/>
    </div>
  );
}

export default App
