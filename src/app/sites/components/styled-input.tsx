import React from 'react';

const StyledInput = ({ ...props }) => {
  const baseClasses = "flex-1 p-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white";
  return <input {...props} className={`${baseClasses} ${props.className || ''}`} />;
};

export default StyledInput;