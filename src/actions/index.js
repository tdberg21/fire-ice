export const addHouses = (houses) => ({
  type: 'ADD_HOUSES',
  houses
});

export const addMembers = (members, house) => ({
  type: 'ADD_MEMBERS',
  house,
  members
});
