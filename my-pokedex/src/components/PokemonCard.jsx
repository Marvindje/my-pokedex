import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function PokemonCard(props) {
  const { pokemon } = props;

  return (
    <motion.div className="PokemonCard"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5 }}
    >
      <figure>
        {pokemon.imgSrc ? (
          <img src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
          <p>???</p>
        )}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    </motion.div>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default PokemonCard;
