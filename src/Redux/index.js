import { combineReducers } from 'redux';
import weather from './weather/reducer';
export const rootReducers = combineReducers({
  weather,
});
