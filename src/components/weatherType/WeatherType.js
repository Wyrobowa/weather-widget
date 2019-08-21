import React from 'react';
import PropTypes from 'prop-types';

const WeatherType = ({ type }) => {
  let weatherType = '';

  switch (type) {
    case 'Cloudy':
      weatherType = 'Cloudy';
      break;
    case 'PartlyCloudy':
      weatherType = 'Partly cloudy';
      break;
    case 'RainLight':
      weatherType = 'Periods of rain';
      break;
    case 'RainAndCloudy':
      weatherType = 'Rainy and cloudy';
      break;
    case 'Sunny':
      weatherType = 'Sunny';
      break;
    default:
      weatherType = 'Sunny';
      break;
  }

  return (
    <span>{weatherType}</span>
  );
};

WeatherType.propTypes = {
  type: PropTypes.string.isRequired,
};

export default WeatherType;
