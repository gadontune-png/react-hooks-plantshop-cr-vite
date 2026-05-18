import React from "react";
function PlantCard({ plant, onToggleStock }) {
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      <button onClick={() => onToggleStock(plant.id)}>
        {plant.isOutOfStock ? "Out of Stock" : "In Stock"}
      </button>
    </li>
  );
}

export default PlantCard;