import React from 'react'


export const Colorbars = (props) => {
  return (
    <div className={`w3-${props.barColor} mt-2 ${props.width} rounded-2xl`}>
      <div className="h-2 "></div>
    </div>
  )
}
