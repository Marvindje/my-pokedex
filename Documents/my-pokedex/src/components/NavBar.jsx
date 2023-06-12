import React from 'react';

const NavBar = ({ onPreviousClick, onNextClick }) => {
  return (
    <div className="navbar">
      <button onClick={onPreviousClick}>Previous</button>
      <button onClick={onNextClick}>Next</button>
    </div>
  );
};

export default NavBar;
