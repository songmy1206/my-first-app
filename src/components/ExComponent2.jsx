import React from 'react'
import { useState } from 'react'

export default function ExComponent2() {
  let [count, setCount] = useState(0) 
  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>setCount(count - 1)}>-</button>
      <button onClick={()=>setCount(count + 1)}>+</button>
    </div>
  )
}
