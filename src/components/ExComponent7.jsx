import React from 'react';
import { useRef } from 'react';

export default function ExComponent7() {
  const inputEl = useRef();
  const colorEl = useRef();

  const backgroundCSS = () => {
    colorEl.current.style.backgroundColor = inputEl.current.value;
  };
  return (
    <div ref={colorEl}>
      <input type="text" ref={inputEl} />
      <br />
      <button onClick={backgroundCSS}>색 적용</button>
    </div>
  );
}
