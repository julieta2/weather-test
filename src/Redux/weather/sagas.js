import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { WEATHER_API_KEY } from '../../components/config';
import {
  getWeatherFailure,
  getWeatherRequest,
  getWeatherSuccess,
} from './actions';

function* getWeather(action) {
  try {
    const {
      payload: { cityName },
    } = action;
    const response = yield axios.get(
      `//api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${WEATHER_API_KEY}`
    );
    if (response && response?.status === 200) {
      yield put(getWeatherSuccess(response?.data));
    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(getWeatherFailure(e?.response?.data?.message));
    }
  }
}

export default function* () {
  yield takeLatest(getWeatherRequest, getWeather);
}
