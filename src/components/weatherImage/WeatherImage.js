import React from 'react';
import PropTypes from 'prop-types';

// images
import Cloudy from '../../assets/img/cloudy.png';
import PartlyCloudy from '../../assets/img/partly_cloudy.png';
import RainLight from '../../assets/img/rain_light.png';
import RainAndCloudy from '../../assets/img/rain_s_cloudy.png';
import Sunny from '../../assets/img/sunny.png';

const WeatherImage = ({ type }) => {
  let imagePath = '';

  switch (type) {
    case 'Cloudy':
      imagePath = Cloudy;
      break;
    case 'PartlyCloudy':
      imagePath = PartlyCloudy;
      break;
    case 'RainLight':
      imagePath = RainLight;
      break;
    case 'RainAndCloudy':
      imagePath = RainAndCloudy;
      break;
    case 'Sunny':
      imagePath = Sunny;
      break;
    default:
      imagePath = Sunny;
      break;
  }

  return (
    <img src={imagePath} alt={type} className="weather-image" />
  );
};

WeatherImage.propTypes = {
  type: PropTypes.string.isRequired,
};

export default WeatherImage;
