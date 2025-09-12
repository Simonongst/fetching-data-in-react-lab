import React from 'react'

const StarshipCard = ({starship}) => {
    const { name, starship_class, manufacturer, model} = starship;

  return (
    <div>
        <strong>{name}</strong>
        <p>Class: {starship_class}</p>
        <p>Manufacturer: {manufacturer}</p>
        <p>Model: {model}</p>
    </div>
  )
}

export default StarshipCard