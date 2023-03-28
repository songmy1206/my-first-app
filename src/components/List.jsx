import React from 'react'
import Modal from './Modal'
import ListChild from './ListChild';


export default function List() {
  const dataArr = [
  {
    title: "리액트 공부하기",
    text: "state 사용법 익히기",
  },
  {
    title: "코테 풀기",
    text: "Lv0",
  }
];

  return (
    <div>
      <h1>오늘 해야할 일</h1>
      <Modal />
      {dataArr.map((el, index)=> <ListChild title={el.title} text={el.text} />)}
      {dataArr.map((el, index)=> {
        return (
          <div key = {index}>
            <hr />
            <h2>{el.title}</h2>
            <p>{el.text}</p>
          </div>
        )
      })}
      <Modal />
    </div>
  )
}
