import request from './requestWrapper';


// #region GET

function getParams() {
  return request({
    url: 'Predict/GetParams',
    method: 'GET',
  });
}

// #endregion

// #region POST

function getPrediction(group, formData) {
  return request({
    url: 'Predict/GetPrediction',
    method: 'POST',
    params: { group },
    data: formData
  });
}

// #endregion

export default {
  getParams, getPrediction
}