import { combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  usersList : userReducer
});

export default rootReducer;
