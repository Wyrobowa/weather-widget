import React, { Fragment, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import Moment from 'moment';

// components
import Title from './components/title/Title';
import Select from './components/select/Select';
import SelectedDate from './components/selectedDate/SelectedDate';
import OtherDates from './components/otherDates/OtherDates';

import './App.scss';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState({});
  const [selectedDate, setSelectedDate] = useState({});
  const [details, setDetails] = useState({
    visibility: false,
  });

  useEffect(() => {
    fetch('http://dev-weather-api.azurewebsites.net/api/city')
      .then(response => response.json())
      .then((data) => {
        setCities(data);
      });
  }, []);

  useEffect(() => {
    if (selectedCity.cityId && selectedDate.inputValue) {
      fetch(`http://dev-weather-api.azurewebsites.net/api/city/${selectedCity.cityId}/weather?date=${selectedDate.inputValue}`)
        .then(response => response.json())
        .then((data) => {
          if (!data.errors) {
            setDetails({
              citiesDetails: data,
              visibility: true,
              cityName: selectedCity.cityName,
            });
          }
        });
    }
  }, [selectedCity, selectedDate]);

  const handleChange = (e) => {
    e.persist();
    const index = e.target.selectedIndex;
    setSelectedCity({
      cityId: e.target.value,
      cityName: e.target[index].text,
    });
  };

  const handleDateChange = (date) => {
    setSelectedDate({
      ...selectedDate,
      startDate: date,
      inputValue: Moment(date).format('YYYY-MM-DD'),
    });
  };

  return (
    <section className="weather-widget">
      <div className="weather-widget__title">
        <Title
          heading="h1"
          type="primary"
        >
          Weather Widget
        </Title>
      </div>

      <div className="weather-widget__pickers">
        <Select
          options={cities}
          onChange={handleChange}
        />

        <DatePicker
          todayButton="Today"
          dateFormat="yyyy-MM-dd"
          selected={selectedDate.startDate}
          popperPlacement="top-end"
          popperClassName="calendar"
          onChange={handleDateChange}
          placeholderText=" Choose date"
        />
      </div>

      <div className="weather-days">
        {(details.visibility && details.citiesDetails)
          && (
            <div className="weather-days__selected-date">
              <SelectedDate
                cityName={details.cityName}
                selectedDateWeatherDetails={details.citiesDetails[0]}
              />
            </div>
          )
        }

        <div className="weather-days__other-dates">
          {(details.visibility && details.citiesDetails)
            && details.citiesDetails.map((item, index) => (
              <div key={index} className="weather-days__other-date">
                <OtherDates dateWeatherDetails={item} />
              </div>
            ))
        }
        </div>
      </div>
    </section>
  );
}

export default App;
