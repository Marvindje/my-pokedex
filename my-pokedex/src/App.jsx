import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import PokemonCard from './components/PokemonCard';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const pokemonList = [
  {
    name: "bulbisare",
    imgSrc:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  },
  {
    name: "salamèche",
    imgSrc:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  },
  {
    name: "carapuce",
    imgSrc:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
  },
  {
    name: "mew",
    imgSrc:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  useEffect(() => {
    toast.success("hello pokemon trainer :)", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, []);

  useEffect(() => {
    if (pokemonList[pokemonIndex].name === 'pikachu') {
      toast.warn("pika pikachu !!!", {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [pokemonIndex]);

  function handlePreviousClick() {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  }

  function handleNextClick() {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  }

  return (
    <div className="App">
      <NavBar
        onPreviousClick={handlePreviousClick}
        onNextClick={handleNextClick}
      />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
