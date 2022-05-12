import React from 'react'
import { Colorbars } from './Colorbars'
export const Peoplecard = (props) => {
  return (
    <div className="mt-8 w-80">
        <div className="flex">
            <img src={props.profilePic} alt="" className="h-12 rounded-full"></img>
            <div className="peopleInfo ml-4"> 
                <h1 className="text-md font-semibold">{props.name}</h1>
                <h1 className="text-xs text-gray">{props.job}</h1>
            </div>   
        </div>
        <div>
            <Colorbars barColor={props.barColor} width={props.width}></Colorbars>
        </div>
        <div className="flex justify-between text-sm mt-2">
            <h1>High Priority Issue:{props.noOfIssues}</h1>
            <h1>Total Issues:{props.totalIssues}</h1>
        </div>
    </div>
  )
}
