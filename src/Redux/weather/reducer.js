import { handleActions } from 'redux-actions';
import {
  getWeatherFailure,
  getWeatherSuccess,
  getWeatherRequest,
  deleteErrorMessage,
} from './actions';

const initialState = {
  weather: {},
  loading: false,
  error: null,
};

const reducer = handleActions(
  {
    [getWeatherRequest]: (state) => ({
      ...state,
      loading: true,
    }),
    [getWeatherSuccess]: (state, { payload }) => ({
      ...state,
      loading: false,
      weather: payload,
      error: null,
    }),
    [getWeatherFailure]: (state, { payload }) => ({
      ...state,
      loading: false,
      weather: {},
      error: payload,
    }),
    [deleteErrorMessage]: (state) => ({
      ...state,
      error: null,
    }),
  },
  initialState
);

export default reducer;
