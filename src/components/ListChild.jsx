import React from 'react'

export default function ListChild({title, text}) {
  return (
    <div>
      <div className="ListChild">
        <hr />
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  )
}
