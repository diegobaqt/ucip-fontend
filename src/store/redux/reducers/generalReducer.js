// Constants
import {generalTypes} from '../types';

const initialState = {
  loading: false,
  currentRoute: '/',
};

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case generalTypes.IS_LOADING:
      return {
        ...state,
        loading: action.loading
      };
    case generalTypes.SET_CURRENT_ROUTE:
      return {
        ...state,
        currentRoute: action.currentRoute
      };
    default:
      return state;
  }
};

export default generalReducer;
