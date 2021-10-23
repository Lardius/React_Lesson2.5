import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

const MultiSelectField = ({ options, onChange, name, label, defaultValue }) => {
  const optionsArray = !Array.isArray(options) && typeof (options) === 'object'
    ? Object.keys(options).map(optionName => ({
      label: options[optionName].name,
      value: options[optionName]._id,
      color: options[optionName].color
    }))
    : options
  const handleChange = (value) => {
    onChange({ name: name, value, color: optionsArray.color })
  }
  return (
    <div className="mb-4">
      <label htmlFor={ name }>{ label }</label>
      <Select
        defaultValue={defaultValue}
        closeMenuOnSelect={false}
        isMulti
        options={optionsArray}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={ handleChange}
        name={name}
      />
    </div>
  )
}
MultiSelectField.defaultProps = {
  defaultValue: ''
}

MultiSelectField.propTypes = {
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.array
}

export default MultiSelectField
