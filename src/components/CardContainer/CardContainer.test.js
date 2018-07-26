import { mapStateToProps, mapDispatchToProps } from './CardContainer.js';
import { addHouses } from '../../actions/index.js';

describe('Card Container TESTS', () => {

  describe('mapStateToProps', () => {
    it('should return an object with the houses array', () => {
      const mockState = {
        houses: ['Slytherin', 'Gryffindor', 'Hufflepuff', 'Ravenclaw']
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(mockState);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with addHouses action', () => {
      const mockDispatch = jest.fn();
      const mockHouses = ['Slytherin', 'Gryffindor', 'Hufflepuff', 'Ravenclaw'];
      const actionToDispatch = addHouses(mockHouses);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addHouses(mockHouses);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

});