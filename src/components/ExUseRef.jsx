import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';

export default function ExUseRef() {
  const inputEl = useRef();

  const calculate = ['+', '-', 'x'];
  const randomCal = calculate[Math.floor(Math.random() * calculate.length)];
  const randomNum1 = Math.floor(Math.random() * 10);
  const randomNum2 = Math.floor(Math.random() * 10);

  const cal = () => {
    const answer = parseInt(inputEl.current.value);
    if (randomCal === '+' && randomNum1 + randomNum2 === answer) {
      alert('맞');
      setTimeout('location.reload()', 1);
    } else if (randomCal === '-' && randomNum1 - randomNum2 === answer) {
      alert('맞');
      setTimeout('location.reload()', 1);
    } else if (randomCal === 'x' && randomNum1 * randomNum2 === answer) {
      alert('맞');
      setTimeout('location.reload()', 1);
    } else {
      alert('틀');
    }
  };
  return (
    <div>
      <h1>
        {randomNum1} {randomCal} {randomNum2}
      </h1>
      <input type="text" ref={inputEl} />
      <br />
      <button onClick={cal}>정답 제출</button>
    </div>
  );
}
