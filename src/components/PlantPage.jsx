import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";
import PlantList from "./PlantList";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  // 1. Renders all plants on page load
  useEffect(() => {
    fetch("http://localhost:3000/plants")
      .then(res => res.json())
      .then(setPlants);
  }, []);

  // 2. Add a new plant
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  // 3. Mark plant as out of stock / in stock
  function handleToggleStock(id) {
    setPlants(plants =>
      plants.map(plant =>
        plant.id === id ? { ...plant, isOutOfStock: !plant.isOutOfStock } : plant
      )
    );
  }

  // 4. Filter plants by search input
  const displayedPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search search={search} onSearchChange={setSearch} />
      <PlantList plants={displayedPlants} onToggleStock={handleToggleStock} />
    </main>
  );
}

export default PlantPage;