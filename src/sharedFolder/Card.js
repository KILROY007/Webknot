import React from 'react'

export const Card = (props) => {
  return (
    <div className="card">
        <div className="cardHead flex justify-between w-80 mt-8 ">
            <h1 className="text-md font-semibold">Lorem ipsum dolor sit</h1>
            <h1 className={`text-gray-400 text-xs mt-1`}>{props.dateText}</h1>
        </div>
        <div className="cardInfo w-80 mt-2 ">
            <p className="text-xs leading-5 tracking-wide text-gray-600"> Lorem ipsum dolor sit amet, conctetur adipiscing elit. Ut
ut gravida dolor. Phasellus vitae sem auctor.</p>
        </div>
        
    </div> 
  )
}
