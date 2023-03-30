import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

export default function PracticeTimer(toggle) {
  const [timer, setTimer] = useState(0);
  const useTime = useRef(timer);
  useEffect(() => {
    const time = setInterval(() => {
      console.log('타이머 실행 중');
      setTimer((cur) => cur + 1);
    }, 1000);
    return () => {
      console.log('타이머 종료');
      clearInterval(time);
    };
  }, []);

  const onUseTime = () => {
    useTime.current = timer;
  };
  return (
    <>
      <button>보이기</button>
      <button onClick={onUseTime}>시간</button>
      <button onClick={toggle}>숨기기</button>
    </>
  );
}
