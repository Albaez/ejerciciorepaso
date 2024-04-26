import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ListadoComponent = ({ onSelectItem }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20')
      .then(response => response.json())
      .then(responseData => setData(responseData.results));
  }, []);

  return (
    <div>
      <h1>Listado de Pokémon</h1>
      <ul>
        {data.map(pokemon => (
          <li key={pokemon.name} onClick={() => onSelectItem(pokemon)}>
            <Link to={`/detail/${pokemon.name}`} state={{ selectedItem: pokemon }}>
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListadoComponent;