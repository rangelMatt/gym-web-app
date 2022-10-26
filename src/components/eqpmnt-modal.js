import React from 'react'

export default function Grid(props) {

  const cells = props.arrOfObj.map(obj =>
    <div style={{ backgroundColor: `${'#' + Math.random().toString(16).substr(-6)}` }}
      className="item">{obj}</div>)

  // const lower = props.lowerBody.map(low =>
  //   <div style={{ backgroundColor: `${'#' + Math.random().toString(16).substr(-6)}` }}
  //     className="item">{low}</div>)

  return (
<div>
<div className="container">
      {cells}

    </div>
</div>
    
  )
}