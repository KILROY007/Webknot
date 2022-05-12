import React from 'react'
import {Input} from '../../Input'
import DropDown from '../../Dropdown'
export const DesCreate = () => {
  return (
    <div>
        <h1 className="text-3xl font-semibold ml-72">Create</h1>
        <div className="ml-72 text-xl">
            <Input text="Title:"/>
            <div className="grid grid-cols-2">
                <DropDown name="Type" option1="Type 1" option2="Type 2" option3="Type 3"/>
                <DropDown name="Priority:" option1="High" option2="Medium" option3="low"/>
                <Input text="Affects Version/s:"/>
                <Input text="Component/s:"/>
                <Input text="labels:"/>
                <Input text="Story Point:" />
                <Input text="Status:" />
                <Input text="Resolution:" />
                <DropDown name="Priority:" option1="Version 2.8" option2="Version 3.01" option3="Versio 5.02"/>
                <DropDown name="Priority:" option1="Sumant" option2="Bindu" option3="Atharva"/>
                <Input text="Reporter:" />
                <Input text="Description:" type="dropdown"/>
                <Input text="Type:" type="file" placeholder="Attach a file" />
                <div className="flex flex-row-reverse mr-20"> 
                    <button className="text-xl bg-blue-600  rounded-xl text-white mt-16 py-1 px-8">Submit {`>`}</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}
