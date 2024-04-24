import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ListadoComponent = ({ onSelectItem }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Aquí puedes hacer la llamada a la API para obtener los datos del listado
    // Puedes utilizar fetch o axios para hacer la petición
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(response => response.json())
      .then(responseData => setData(responseData));
  }, []);

  return (
    <div>
      <h1>Listado de Pokémon</h1>
      <ul>
        <li onClick={() => onSelectItem(data)}>
          <Link to={`/detail/${data.name}`} state={{ selectedItem: data }}>
            {data.name}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ListadoComponent;