import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const DetallesComponent = () => {
  const location = useLocation();
  const selectedItem = location.state.selectedItem;
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(selectedItem.url)
      .then(response => response.json())
      .then(responseData => setPokemonData(responseData));
  }, [selectedItem]);

  return (
    <div>
      <h1>Detalles del elemento seleccionado</h1>
      {pokemonData && (
        <div>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <p>Nombre: {pokemonData.name}</p>
          <h2>Habilidades:</h2>
          <ul>
            {pokemonData.abilities.map(ability => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DetallesComponent;