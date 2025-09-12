import StarshipCard from '../StarshipCard/StarshipCard'

const StarshipList = ({displayedStarships}) => {
    if(!displayedStarships || displayedStarships.length === 0) {
        return <p>Loading...</p>;
    }
  return (
    <div>
        {displayedStarships.map((starship, index) => (
            <StarshipCard key={index} starship={starship}/>
        ))}
    </div>
  )
}

export default StarshipList