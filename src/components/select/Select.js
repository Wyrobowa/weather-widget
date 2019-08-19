import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ options, onChange }) => (
  <select className="widget__select" onChange={onChange} >

    <option className="widget__option" value="0">-- Choose city --</option>/>

    {options.map((option) => (
      <option key={option.id} className="widget__option" value={option.id}>{option.name}</option>
    ))}

  </select>
);

Select.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Select;
