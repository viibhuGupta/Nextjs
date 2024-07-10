import React from 'react';

const SelectionInput = ({ options, onChange, className = '', ...props }) => {
  return (
    <select
      onChange={onChange}
      className={`bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${className}`}
      {...props}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectionInput;