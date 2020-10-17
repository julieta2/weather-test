import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../loading';
import './index.css';
const ResultWeather = () => {
  const {
    weather: {
      loading,
      error,
      weather: { name, main, weather },
    },
  } = useSelector((state) => state);
  return (
    <div className={'result-weather'}>
      {loading ? (
        <Loading />
      ) : (
        <>
          {main?.temp_max && (
            <div className={'title'}>The Weather in {name}</div>
          )}
          <div className={'body'}>
            {main?.temp_max && <div> {main?.temp_max}&deg;</div>}
            <div>{error ? error : weather?.[0]?.main}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ResultWeather;
