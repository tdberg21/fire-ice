export const scrubHouseData = data => {
  let houses = data.map(house => {
    if (house.founded === '') {
      house.founded = 'n/a';
    }
    return {
      name: house.name,
      founded: house.founded,
      seats: house.seats,
      titles: house.titles,
      ancestralWeapons: house.ancestralWeapons,
      coatOfArms: house.coatOfArms,
      words: house.words,
      swornMembers: house.swornMembers
    };
  });
  return houses;
};

export const scrubMembers = members => (members.map(member => {
  member = member.split('characters/')[1];
  return member;
})
);