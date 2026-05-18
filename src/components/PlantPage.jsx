import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  // 1. Fetch plants on mount
  useEffect(() => {
    fetch("http://localhost:3000/plants")
      .then(res => res.json())
      .then(setPlants);
  }, []);

  // 2. Toggle out of stock - non-persisting
  function handleToggleStock(id) {
    setPlants(plants =>
      plants.map(plant =>
        plant.id === id ? { ...plant, isOutOfStock: !plant.isOutOfStock } : plant
      )
    );
  }

  // 3. Filter plants for search
  const displayedPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm />
      <Search search={search} onSearchChange={setSearch} />
      <PlantList plants={displayedPlants} onToggleStock={handleToggleStock} />
    </main>
  );
}

export default PlantPage;