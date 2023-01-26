// Constants
import {generalTypes} from '../types';

export const setLoading = (loading) => async (dispatch) => {
  dispatch({
    type: generalTypes.IS_LOADING,
    loading,
  });
};
