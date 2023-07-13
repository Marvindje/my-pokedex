import React, { useEffect } from 'react';

function NavBar(props) {
  useEffect(() => {
    if (props.selectedPokemon === 'pikachu') {
      alert("pika pikachu !!!");
    }
  }, [props.selectedPokemon]);

  return (
    <div className="NavBar">
      {props.onPreviousClick && (
        <button onClick={props.onPreviousClick}>Précédent</button>
      )}
      {props.onNextClick && (
        <button onClick={props.onNextClick}>Suivant</button>
      )}
    </div>
  );
}

export default NavBar;
