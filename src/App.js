import React, { Fragment, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import Moment from 'moment';

// components
import Title from './components/title/Title';
import Select from './components/select/Select';
import SelectedDate from './components/selectedDate/SelectedDate';
import OtherDates from './components/otherDates/OtherDates';

import './App.scss';
import "react-datepicker/dist/react-datepicker.css";

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
      inputValue: Moment(date).format('YYYY-MM-DD')
    });
  };

  return (
    <Fragment>
      <Title
        heading="h1"
        type="primary"
      >
        Weather Widget
      </Title>

      <Select 
        options={cities}
        onChange={handleChange}
      />

      <div>
        <DatePicker
          todayButton="Today"
          dateFormat="yyyy-MM-dd"
          selected={selectedDate.startDate}
          onChange={handleDateChange}
          placeholderText="Click here to choose a date"
        />
      </div>

      <div>
        <span>{details.cityName}</span>
        {(details.visibility && details.citiesDetails)
          && (
            <div>
              <SelectedDate selectedDateWeatherDetails={details.citiesDetails[0]} />
            </div>
          )
        }
        {(details.visibility && details.citiesDetails)
          &&
            details.citiesDetails.map((item, index) => (
                <div key={index}>
                  <OtherDates dateWeatherDetails={item} />
                </div>
            ))
        }
      </div>
    </Fragment>
  );
}

export default App;
