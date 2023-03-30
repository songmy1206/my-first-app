import React from 'react';
import { useState } from 'react';
import PracticeOne from './PracticeOne';
import PracticeTwo from './PracticeTwo';

// export default function ExComponent8() {
//   const [text, setClick] = useState('1번');
//   const onChange = () => {
//     text === '1번' ? setClick('2번') : setClick('1번');
//   };
//   const textChange = text === '1번' ? <PracticeOne /> : <PracticeTwo />;
//   return (
//     <>
//       {textChange}
//       <button onClick={onChange}>{text}</button>
//     </>
//   );
// }

export default function ExComponent8() {
  const [text, setClick] = useState('1번');
  const onChange = () => {
    text === '1번' ? setClick('2번') : setClick('1번');
  };
  return (
    <>
      {text === '1번' ? (
        <PracticeOne text={text} />
      ) : (
        <PracticeTwo text={text} />
      )}
      <button onClick={onChange}>{text}</button>
    </>
  );
}
