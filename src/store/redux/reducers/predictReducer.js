// Constants
import {predictTypes} from '../types';

const initialState = {
  predictParams: [],
  predictions: {},
  classifiers: []
}

const predictReducer = (state = initialState, action) => {
  switch (action.type) {
    case predictTypes.GET_PARAMS:
      return {
        ...state,
        predictParams: action.predictParams
      };
    case predictTypes.GET_PREDICTION:
      return {
        ...state,
        predictions: action.predictions,
        classifiers: action.classifiers
      };
    default:
      return state;
  }
};

export default predictReducer;
