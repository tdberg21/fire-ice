import { memberReducer } from './member-reducer.js';

describe('memberReducer tests', () => {
  it('should return the initial state', () => {
    const expected = [];
    const results = memberReducer(undefined, {});
    expect(results).toEqual(expected);
  });

  it('should return a new state with the members', () => {
    const mockMembers = ['Harry', 'Ron', 'Neville'];
    const mockAction = {
      type: 'ADD_MEMBERS',
      members: mockMembers
    };
    const results = memberReducer(undefined, mockAction);

    expect(results).toEqual(mockMembers);
  });
});