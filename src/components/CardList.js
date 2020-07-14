import React from 'react';
import Card from './Card';

const CardList = ({ pokemons }) => {
  return (
    <div>
      {
        pokemons.map((user, i) => {
          return (
            <Card
              key={i}
              pokemon_number={i}
              url={pokemons[i].url}
              name={pokemons[i].name}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;