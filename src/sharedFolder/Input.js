import React from 'react'

export const Input = (props) => {
  return (
    <div className="input ml-5 mt-6" >
            <label className={` tracking-wide text-black text-md  " htmlFor="grid-first-name`}  >
                {props.text}
            </label>
            <input  className={`appearance-none block w-full bg-gray-200 text-black border border-b-black ${props.type}   rounded py-3 px-4 mb-3 mt-1 leading-tight focus:outline-none focus:bg-white focus:border-textFieldOutliner-primary `} placeholder={props.placeholder} autoComplete="off" ></input>
        </div>
  )
}
