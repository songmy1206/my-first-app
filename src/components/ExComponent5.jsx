import React from 'react'
import ExList from './ExList';

export default function ExComponent5() {
  const items = [
  {
    item: "PS5",
    price: "685,000원",
  },
  {
    item: "에어프라이어",
    price: "50,000원",
  },
  {
    item: "사세 치킨윙",
    price: "11,500원",
  }
];

  return (
    <div>
      {items.map((el, index)=> <ExList item={el.item} price={el.price } key={index} />)}
      {items.map((el, index)=> {
        return (
          <div key = {index}>
            <h2>{el.item}</h2>
            <p>{el.price}</p>
          </div>
        )
      })}
    </div>
  )
}
