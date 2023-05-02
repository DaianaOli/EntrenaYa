import React from 'react';

function Input(props) {
  const { type, value, onChange } = props;
  return (
    <input type={type} value={value} onChange={onChange} className="border border-gray-400 py-2 px-4 rounded" />
  );
}

export default Input;
