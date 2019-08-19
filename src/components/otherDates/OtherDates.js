import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

// components
import WeatherType from '../weatherType/WeatherType';

const OtherDates = ({ dateWeatherDetails }) => {
  return (
    <div>
      <div>
        {Moment(dateWeatherDetails.date).format('dddd')}
      </div>
      <div>
      <WeatherType type={dateWeatherDetails.type} />
      </div>
      <div>
        {`${dateWeatherDetails.temperature} F`}
      </div>
      <div>
        <span>Pollen Count</span>
        <span>{dateWeatherDetails.pollenCount}</span>
      </div>
    </div>
  );
};

OtherDates.propTypes = {
  dateWeatherDetails: PropTypes.object.isRequired,
};

export default OtherDates;
