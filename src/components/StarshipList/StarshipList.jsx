import StarshipCard from "../StarshipCard/StarshipCard";

const StarshipList = ({ displayedStarships }) => {
  if (!displayedStarships || displayedStarships.length === 0) {
    return <p>Loading...</p>;
  }
  return (
    <section>
      <ul>
        {displayedStarships.map((starship, index) => (
          <li key={index}>
            <StarshipCard starship={starship} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default StarshipList;
