import React from 'react';
import './App.css';
import Test from './components/Test';
// import TestStyled from './components/TestStyled';

function App() {
  const TestObjArr = [
    {
      name: '뽀로로',
      age: '5',
      nickName: 'pororo',
    },
    {
      name: '루피',
      age: '6',
      nickName: 'lupy',
    },
    {
      name: '크롱',
      age: '4',
      nickName: 'crong',
    },
  ];
  return (
    <div className="App">
      {/* <TestStyled /> */}
      <Test TestArr={TestObjArr} />
    </div>
  );
}

export default App;
