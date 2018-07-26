import { scrubMembers } from './dataCleaners';

export const fetchHouseData = async () => {
  const url = 'http://localhost:3001/api/v1/houses';
  const response = await fetch(url);
  const results = await response.json();
  return results;
};

export const fetchMembers = (members) => {
  const cleanedMembers = scrubMembers(members);
  
  console.log(cleanedMembers);
};