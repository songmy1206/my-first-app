import React from 'react'
import ListChild from './ListChild'

export default function ExComponent4() {

  return (
    <div>
      <h1>오늘 해야할 일</h1>
      <hr />
      <ListChild title = {"리액트 공부"} text = {"state 사용법 익히기"}/>
      <hr />
      <ListChild title = {"코테 문제풀기"} text = {"Lv0"}/>
      <hr />
    </div>
  )
}
