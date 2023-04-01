import React from 'react';
import TestList from './TestList';

export default function Test() {
  const items = [
    {
      item: 'PS5',
      price: '685,000원',
    },
    {
      item: '에어 프라이어',
      price: '50,000원',
    },
    {
      item: '사세 치킨윙',
      price: '11,500원',
    },
  ];
  return (
    <div>
      {items.map((el, index) => {
        return <TestList item={el.item} price={el.price} key={index} />;
      })}
      {items.map((el, index) => {
        return (
          <div key={index}>
            <h1>{el.item}</h1>
            <p>{el.price}</p>
          </div>
        );
      })}
    </div>
  );
}
