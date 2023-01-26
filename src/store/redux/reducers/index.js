// Dependencies
import { combineReducers } from 'redux';

// Reducers
import generalReducer from "./generalReducer";
import predictReducer from "./predictReducer";

// Reducers
export default combineReducers({
  generalReducer: generalReducer,
  predictReducer: predictReducer,
});