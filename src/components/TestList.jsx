import React from 'react';

export default function TestList(props) {
  const { name, age, nickName } = props.obj;
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <p>{nickName}</p>
    </div>
  );
}
