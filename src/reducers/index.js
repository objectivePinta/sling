import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import { routerReducer } from 'react-router-redux';
import loggedUser from './loggedUserReducer';

const rootReducer = combineReducers({
  fuelSavings,
  loggedUser,
  routing: routerReducer
});

export default rootReducer;
