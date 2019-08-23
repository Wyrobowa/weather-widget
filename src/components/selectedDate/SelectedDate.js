import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

// components
import WeatherImage from '../weatherImage/WeatherImage';
import WeatherType from '../weatherType/WeatherType';

const SelectedDate = ({ selectedDateWeatherDetails }) => (
  <div className="selected-date selected-date--flex">
    <div className="selected-date__date text-space">
      {Moment(selectedDateWeatherDetails.date).format('dddd, MMMM do')}
    </div>
    <div className="selected-date__type text-space">
      <WeatherType type={selectedDateWeatherDetails.type} />
    </div>
    <div className="selected-date__box selected-date--flex">
      <div className="selected-date__type-img">
        <WeatherImage type={selectedDateWeatherDetails.type} />
      </div>
      <div className="selected-date__temperature">
        <span className="selected-date--flex">
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

SelectedDate.propTypes = {
  selectedDateWeatherDetails: PropTypes.object.isRequired,
};

export default SelectedDate;
