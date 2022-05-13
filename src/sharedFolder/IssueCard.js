import React from 'react'

export const IssueCard = (props) => {
  return (
    <div className="mt-16">
        <div className="flex justify-between  md:w-80 mt-8">
            <h1 className="text-sm font-semibold">ID:PCG836342</h1>
            <h1 className={`text-gray-400 text-xs mt-1`}>{props.dateText}</h1>
        </div>
        <div className="mt-2"> 
            <h1 className="text-md font-semibold">Lorem ipsum dolor sit</h1>
            <p className="text-xs leading-5 tracking-wide text-gray-600"> Lorem ipsum dolor sit amet, conctetur adipiscing elit. Ut
ut gravida dolor. Phasellus vitae sem auctor.</p>
        </div>
        <div className="flex justify-between md:w-80 mt-2">
            <h1 className="text-sm text-gray-400 font-semibold">Assignee</h1>
            <h1 className={`text-gray-400 text-sm mt-1 `}>Status</h1>
        </div>
        <div className="flex justify-between md:w-80">
            <div className="flex">
                <img src={props.profilePic} alt="" className="h-12 rounded-full"></img>
                <div className="peopleInfo ml-4 mt-2 "> 
                    <h1 className="text-xs w-20 md:text-md font-semibold">Sijo M peter</h1>
                    <h1 className="text-xs w-32 text-gray">UI/UX Designer</h1>
                </div>   
            </div>
            <div className=" mt-2"> 
                <h1 className={` px-1 md:px-2 text-xs py-2  rounded ${props.bgColor} text-white `}>{props.status}</h1>
            </div>
        </div>
    </div>
  )
}
