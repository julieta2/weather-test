import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  getWeatherRequest,
  deleteErrorMessage,
} from '../../Redux/weather/actions';
import './index.css';
const SearchWeather = () => {
  const [cityName, setCityName] = useState('');
  const dispatch = useDispatch();
  let timer = useRef();
  const handleCityName = (event) => {
    const value = event.target.value;
    setCityName(value);
    if (value) {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        dispatch(getWeatherRequest({ cityName: value }));
      }, 500);
    }
  };
  const onBlur = () => {
    dispatch(deleteErrorMessage());
  };
  return (
    <div className={'search-weather'}>
      <div className={'city-name'}>Enter the City Name</div>
      <div>
        <input
          value={cityName}
          onChange={handleCityName}
          onBlur={onBlur}
          type={'text'}
        />
      </div>
    </div>
  );
};

export default SearchWeather;
