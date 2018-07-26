import React from 'react';

const Card = ({ name, founded, seats, titles, ancestralWeapons, coatOfArms, words}) => {
  return (
    <div className='Card'>
      <h2>{name}</h2>
      <h3>Founded: {founded}</h3>
      <p>Seats: {seats}</p>
      <p>Titles: {titles}</p>
      <p>Ancestral Weapons: {ancestralWeapons}</p>
      <p>Coat of Arms: {coatOfArms}</p>
    </div>
  );
};

export default Card;