import { scrubMembers } from './dataCleaners';

export const fetchHouseData = async () => {
  const url = 'http://localhost:3001/api/v1/houses';
  const response = await fetch(url);
  const results = await response.json();
  return results;
};

export const fetchMembers = async (members) => {
  const cleanedMembers = scrubMembers(members);
  const swornMembers = await cleanedMembers.map(async id => {
    let url = `http://localhost:3001/api/v1/character/${id}`; 
    let response = await fetch(url);
    let results = await response.json();
    return await results.name;
  });
  return await Promise.all(swornMembers);
};