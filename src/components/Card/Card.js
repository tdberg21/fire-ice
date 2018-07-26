import React from 'react';
import { fetchMembers } from '../../helper/apiCalls.js';

const Card = ({ name, founded, seats, titles, ancestralWeapons, coatOfArms, swornMembers}) => {
  return (
    <div className='Card' onClick={() => fetchMembers(swornMembers)}>
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