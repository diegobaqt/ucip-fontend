import {message} from "antd";

// Store
import {setLoading} from './generalActions';
import predictServices from '../../../api/predictServices';

// Types
import {predictTypes} from '../types';

// #region GET

export const getParams = () => async (dispatch) => {
  dispatch(setLoading(true));
  predictServices.getParams()
    .then((response) => {
      let list = [];
      Object.keys(response.data).map(key => {
        list.push({
          id: key,
          value: response.data[key]
        })
      });
      dispatch({
        type: predictTypes.GET_PARAMS,
        predictParams: list
      });
      dispatch(setLoading(false));
    })
    .catch(err => {
      message.error(err.data);
      dispatch(setLoading(false));
    })
}

// #endregion

// #region POST

export const getPrediction = (group, formData) => async (dispatch) => {
  dispatch(setLoading(true));
  predictServices.getPrediction(group, formData)
    .then((response) => {
      const predictions = {
        lstm: response.data.lstm,
        gru: response.data.gru,
      };
      const classifiers = [
        { id: 'dtc', ...response.data.dtc },
        { id: 'rfc', ...response.data.rfc },
        { id: 'lrc', ...response.data.lrc },
      ];

      dispatch({
        type: predictTypes.GET_PREDICTION,
        predictions,
        classifiers
      });
      dispatch(setLoading(false));
    })
    .catch(err => {
      message.error(err.data);
      dispatch(setLoading(false));
    })
}

// #endregion