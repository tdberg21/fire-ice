export const scrubHouseData = data => {
  let houses = data.map(house => {
    return {
      name: house.name,
      founded: house.founded,
      seats: house.seats,
      titles: house.titles,
      ancestralWeapons: house.ancestralWeapons,
      coatOfArms: house.coatOfArms
    };
  });
  return houses;
};