import React from 'react'

export default function DropDown(props){
  
    return (
        <div className=" ml-5 mt-6">
        <label className={` tracking-wide text-black text-md  " htmlFor="grid-first-name`}  >
                {props.name}
        </label>
        <div className="relative ">
            <select className={` w-full  border border-gray-300 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-textFieldOutliner-primary mt-1`} id="grid-state" name={`${props.name}`}>
                <option>{props.option1}</option>
                <option>{props.option2}</option>
                <option>{props.option3}</option>
            </select>
        </div>
    </div>
    )
  }

