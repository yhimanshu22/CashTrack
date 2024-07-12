import React from 'react';

const InputType = ({
  labelText,
  labelFor,
  inputType,
  value,
  onChange,
  name,
}) => {
  return (
    <div className="mb-4"> {/* Margin bottom for better spacing */}
      <label 
        htmlFor={labelFor} 
        className="block text-gray-900 text-sm font-medium mb-1" // Changed label color to gray-900
      >
        {labelText}
      </label>
      
      <input
        type={inputType}
        id={labelFor} 
        name={name}
        value={value}
        onChange={onChange}
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-900" // Changed text color to gray-900
      />
    </div>
  );
};

export default InputType;
