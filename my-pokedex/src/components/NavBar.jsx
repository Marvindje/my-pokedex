import React from 'react';

function NavBar(props) {
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
