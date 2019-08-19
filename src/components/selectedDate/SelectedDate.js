import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

// components
import WeatherType from '../weatherType/WeatherType';

const SelectedDate = ({ selectedDateWeatherDetails }) => {
  return (
    <div>
      <div>
        {Moment(selectedDateWeatherDetails.date).format('dddd, MMMM do')}
      </div>
      <div>
        <WeatherType type={selectedDateWeatherDetails.type} />
      </div>
      <div>
        {`${selectedDateWeatherDetails.temperature} F`}
      </div>
      <div>
        {`Precipitation: ${selectedDateWeatherDetails.precipitation}`}
      </div>
      <div>
        {`Humidity: ${selectedDateWeatherDetails.humidity}`}
      </div>
      <div>
        {`Wind: ${selectedDateWeatherDetails.windInfo.speed} mph ${selectedDateWeatherDetails.windInfo.direction}`}
      </div>
      <div>
        {`Pollen Count: ${selectedDateWeatherDetails.pollenCount}`}
      </div>
    </div>
  );
};

SelectedDate.propTypes = {
  selectedDateWeatherDetails: PropTypes.object.isRequired,
};

export default SelectedDate;
