import React from 'react';

function Boton(props) {
  const { onClick, children, type } = props;
  return (
    <button onClick={onClick} type={type} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {children}
    </button>
  );
}

export default Boton;
