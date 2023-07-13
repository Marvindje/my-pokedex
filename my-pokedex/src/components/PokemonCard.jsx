import React from 'react';

function PokemonCard(props) {
  const { pokemon } = props;

  return (
    <div className="PokemonCard">
      <figure>
        {pokemon.imgSrc ? (
          <img src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
          <p>???</p>
        )}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    </div>
  );
}

export default PokemonCard;
