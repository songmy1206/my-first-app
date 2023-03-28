import React from 'react'

export default function ExList({item, price}) {
  return (
    <div>
      <div className="ExList">
        <h2>{item}</h2>
        <p>{price}</p>
      </div>
    </div>
  )
}
