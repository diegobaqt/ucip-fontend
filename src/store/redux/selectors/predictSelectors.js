export const paramsSelector = (state) => {
  return state.predictReducer.predictParams;
}

export const predictionsSelector = (state) => {
  return state.predictReducer.predictions;
}
export const classifiersSelector = (state) => {
  return state.predictReducer.classifiers;
}