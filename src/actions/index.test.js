import * as actions from '../actions';

describe('actions', () => {
  it('should have a type of ADD_HOUSES', () => {
    const houses = ['taco', 'steak', 'hamburgers'];
    const expectedAction = {
      type: 'ADD_HOUSES',
      houses
    };

    const result = actions.addHouses(houses);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of Members', () => {
    const members = ['Draco', 'Harry', 'Ron'];
    const expectedAction = {
      type: 'ADD_MEMBERS',
      members
    };

    const result = actions.addMembers(members);

    expect(result).toEqual(expectedAction);
  });
});
