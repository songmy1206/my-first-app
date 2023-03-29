import React from 'react';
import { useState } from 'react';

export default function Test({ text1, text2 }) {
  return (
    <div className="App">
      <h1>오늘 해야할 일</h1>
      <hr />
      <h2>{text1}</h2>
      <p>{text2}</p>
      <hr />
      <h2>{text1}</h2>
      <p>{text2}</p>
      <hr />
    </div>
  );
}
