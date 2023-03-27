import React from 'react'
import { useState } from 'react'

export default function State() {
  // const teacher = "이효석"
  // function inEnglish(){
  //   const spanEl = document.querySelector("#text")
  //   spanEl.innerHTML = "tetz"
  // }
  const [teacher, setTeacher] = useState("송민영")
  return (
    <div>
      <button onClick={()=>setTeacher("smy")}>영어로</button>
      <br />
      <span id='text'>{teacher}</span>
    </div>
  )
}
