export const memberReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_MEMBERS':
    return [...action.members];
  default:
    return state;
  }
};