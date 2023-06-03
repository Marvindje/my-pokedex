import React from 'react';

function PokemonCard(props) {
  console.log(props); // Affiche les props dans la console du navigateur
  const pokemon = pokemonList[0];

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