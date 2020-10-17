import React from 'react';
import SearchWeather from '../searchWeather';
import ResultWeather from '../resultWeather';
import './index.css';
const Main = () => {
  return (
    <div className={'main-container'}>
      <div className={'main-content'}>
        <SearchWeather />
        <ResultWeather />
      </div>
    </div>
  );
};
export default Main;
