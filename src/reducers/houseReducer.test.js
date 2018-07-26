import { houses } from './house-reducer.js';

describe('houseReducer tests', () => {
  it('should return the initial state', () => {
    const expected = [];
    const results = houses(undefined, {});
    expect(results).toEqual(expected);
  });

  it('should return a new state with the houses', () => {
    const mockHouses = ['taco', 'hamburger', 'pork'];
    const mockAction = {
      type: 'ADD_HOUSES',
      houses: mockHouses
    };
    const results = houses(undefined, mockAction);

    expect(results).toEqual(mockHouses);
  });
});