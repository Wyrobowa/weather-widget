import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

// components
import Title from '../title/Title';
import WeatherImage from '../weatherImage/WeatherImage';

const SelectedDate = ({ cityName, selectedDateWeatherDetails }) => {
  return (
    <div className="selected-date selected-date__flex">
      <Title heading="h2" type="secondary">{cityName}</Title>
      <div className="selected-date__date text-space">
        {Moment(selectedDateWeatherDetails.date).format('dddd, MMMM do')}
      </div>
      <div className="selected-date__type text-space">
        Overcast
      </div>
      <div className="selected-date__box selected-date__flex">
        <div className="selected-date__type-img">
          <WeatherImage type={selectedDateWeatherDetails.type} />
        </div>
        <div className="selected-date__temperature">
          <span className="selected-date__flex">
            {selectedDateWeatherDetails.temperature}
            <sup>&#176;F</sup>
          </span>
        </div>
      </div>
      <div className="selected-date__box">
        <div className="selected-date__item text-space">
          <label>Precipitation: </label>
          <span className="selected-date__value">{`${selectedDateWeatherDetails.precipitation}%`}</span>
        </div>
        <div className="selected-date__item text-space">
          <label>Precipitation: </label>
          <span className="selected-date__value">{`${selectedDateWeatherDetails.humidity}%`}</span>
        </div>
        <div className="selected-date__item text-space">
          <label>Wind: </label>
          <span className="selected-date__value">{`${selectedDateWeatherDetails.windInfo.speed} mph ${selectedDateWeatherDetails.windInfo.direction}`}</span>
        </div>
        <div className="selected-date__item text-space">
          <label>Pollen Count: </label>
          <span className="selected-date__value">{`${selectedDateWeatherDetails.pollenCount}`}</span>
        </div>
      </div>
    </div>
  );
};

SelectedDate.propTypes = {
  cityName: PropTypes.string.isRequired,
  selectedDateWeatherDetails: PropTypes.object.isRequired,
};

export default SelectedDate;
