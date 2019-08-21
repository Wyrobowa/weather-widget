import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

// components
import WeatherImage from '../weatherImage/WeatherImage';

const OtherDates = ({ dateWeatherDetails }) => (
  <div className="other-dates other-dates--flex">
    <div className="other-dates__item">
      <b>{Moment(dateWeatherDetails.date).format('dddd')}</b>
    </div>
    <div className="other-dates__item other-dates__img">
      <WeatherImage type={dateWeatherDetails.type} />
    </div>
    <div className="other-dates__item">
      <b>
        {dateWeatherDetails.temperature}
        &#176;F
      </b>
    </div>
    <div className="other-dates__item other-dates__pollen">
      <label className="other-dates__label text-space">Pollen</label>
      <span><b>{dateWeatherDetails.pollenCount}</b></span>
    </div>
  </div>
);

OtherDates.propTypes = {
  dateWeatherDetails: PropTypes.object.isRequired,
};

export default OtherDates;
