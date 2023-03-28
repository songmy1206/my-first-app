import React from 'react'
import { useState } from 'react'

export default function StateProblem() {
  // const [state, setState] = useState([0]);
  const [state, setState] = useState({teacher : "lhs"});
  console.log(state);
  return (
    <div>
      {/* {state} */}
      {state.teacher}
      <br />
      <button onClick={()=>{
        // state[0] = 1
        // const copyArr = [...state]
        // setState(copyArr)
        // console.log(state);

        state.teacher = "tetz"
        const copyObj = {...state}
        setState(copyObj)
        console.log(state);
      }}>
        1로 만들기
      </button>
    </div>
  )
}
