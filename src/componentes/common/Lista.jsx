import React from 'react';

function Lista(props) {
  const { items } = props;
  return (
    <ul className="list-disc list-inside">
      {items.map((item) => (
        <li key={item.id}>{item.texto}</li>
      ))}
    </ul>
  );
}

export default Lista;
