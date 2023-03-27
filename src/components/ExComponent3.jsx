import React from 'react'
import { useState } from 'react'

export default function ExComponent3() {
  let [count, setCount] = useState(0) 
  return (
    <div>
      <h1 onClick={()=>setCount(count + 1)}>{count >= 10 ? "😎" : "👍"}</h1>
      <p>{count}</p>
    </div>
  )
}
