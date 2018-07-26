import React from 'react';
import { fetchMembers } from '../../helper/apiCalls.js';
let membersToDisplay;

const Card = ({ name, founded, seats, titles, ancestralWeapons, coatOfArms, swornMembers}) => {
  const addSwornMembers = async (swornMembers) => {
    const response = await fetchMembers(swornMembers);
    
    console.log(response);
  };


  return (
    <div className='Card' onClick={() => addSwornMembers(swornMembers)}>
      <h2>{name}</h2>
      <h3>Founded: {founded}</h3>
      <p>Seats: {seats}</p>
      <p>Titles: {titles}</p>
      <p>Ancestral Weapons: {ancestralWeapons}</p>
      <p>Coat of Arms: {coatOfArms}</p>
      <ul>
        {membersToDisplay}
      </ul>
    </div>
  );
};

export default Card;