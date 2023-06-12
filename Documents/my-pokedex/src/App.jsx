import React, { useState } from 'react';
import NavBar from './components/NavBar.jsx'; // Assurez-vous que le chemin d'importation est correct
import PokemonCard from './components/PokemonCard';

const App = () => {
  const pokemonList = [
    {
      name: 'bulbasaur',
      imgSrc:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    },
    {
      name: 'mew',
    },
  ];

  const [pokemonIndex, setPokemonIndex] = useState(0);
  const pokemon = pokemonList[pokemonIndex];

  const handlePreviousClick = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  return (
    <div className="App">
      <NavBar
        onPreviousClick={handlePreviousClick}
        onNextClick={handleNextClick}
      />
      <PokemonCard pokemon={pokemon} />
    </div>
  );
};

export default App;
