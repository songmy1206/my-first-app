import React from 'react';

export default function TestList({ item, price }) {
  return (
    <div>
      <h1>{item}</h1>
      <p>{price}</p>
    </div>
  );
}
