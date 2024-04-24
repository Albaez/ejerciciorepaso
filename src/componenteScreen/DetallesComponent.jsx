import React from 'react';
import { useLocation } from 'react-router-dom';

const DetallesComponent = () => {
  const location = useLocation();
  const selectedItem = location.state.selectedItem;
  const abilities = selectedItem.abilities;

  return (
    <div>
      <h1>Detalles del elemento seleccionado</h1>
      {selectedItem && (
        <div>
          <img src={selectedItem.sprites.front_default} alt={selectedItem.name} />
          <p>Nombre: {selectedItem.name}</p>
          <p>Poder: {selectedItem.power}</p>
          <h2>Habilidades:</h2>
          <ul>
            {abilities.map(ability => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DetallesComponent;