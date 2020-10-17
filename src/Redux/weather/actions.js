import { createAction } from 'redux-actions';

export const getWeatherRequest = createAction('GET_WEATHER_REQUEST');
export const getWeatherSuccess = createAction('GET_WEATHER_SUCCESS');
export const getWeatherFailure = createAction('GET_WEATHER_FAILURE');

export const deleteErrorMessage = createAction('DELETE_ERROR_MESSAGE');
