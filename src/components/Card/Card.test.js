import { mapStateToProps, mapDispatchToProps } from './Card.js';
import { addMembers } from '../../actions';


describe('Card TESTS', () => {

  describe('mapStateToProps', () => {
    it('should return an object with the members', () => {
      const mockState = {
        members: {gryffindor: ['Harry', 'Ron', 'Hermione', 'George']}
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(mockState);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with addMembers action', () => {
      const mockDispatch = jest.fn();
      const mockMembers = ['Harry', 'Ron', 'Hermione', 'George'];
      const actionToDispatch = addMembers(mockMembers, 'gryffindor');

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addMembers(mockMembers, 'gryffindor');

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

});