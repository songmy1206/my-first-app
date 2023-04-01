import React from 'react';
import { useState } from 'react';

export default function Test({ TestArr }) {
  const arrLength = TestArr.length;
  const [state, setState] = useState(0);
  console.log(state);
  const changeObj = () => {
    if (arrLength - 1 > state) {
      setState((cur) => cur + 1);
    } else {
      setState(0);
    }
  };
  return (
    <>
      <div>
        <h1>{TestArr[state].name}</h1>
        <h2>{TestArr[state].age}</h2>
        <p>{TestArr[state].nickName}</p>
        <button onClick={changeObj}>바꾸기</button>
      </div>
    </>
  );
}
