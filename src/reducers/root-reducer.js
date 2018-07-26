import { combineReducers } from 'redux';
import { houses } from './house-reducer';
import { memberReducer } from './member-reducer.js';

const rootReducer = combineReducers({
  houses,
  members: memberReducer
});


export default rootReducer;
