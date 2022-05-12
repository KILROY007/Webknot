import React from 'react'
import {Input} from '../../Input'
import DropDown from '../../Dropdown'
export const MobCreate = () => {
  return (
    <div>
        <h1 className="text-3xl font-semibold ml-5">Create</h1>
        <Input text="Title:"  />
        <DropDown name="Type" option1="Type 1" option2="Type 2" option3="Type 3"/>
        <DropDown name="Priority:" option1="High" option2="Medium" option3="low"/>
        <Input text="Affects Version/s:" />
        <Input text="Component/s:" />
        <Input text="labels:" />
        <Input text="Story Point:"  />
        <Input text="Status:" />
        <Input text="Resolution:" />
        <Input text="Fix Version/s:"  />
        <DropDown name="Priority:" option1="Version 2.8" option2="Version 3.01" option3="Versio 5.02"/>
        <DropDown name="Priority:" option1="Sumant" option2="Bindu" option3="Atharva"/>
        <Input text="Description:" />
        <Input text="Type:" placeholder="Attach a file" type='file'/>
        <button className="text-3xl bg-blue-600 px-8 py-2 w-screen mx-8 rounded-xl text-white">Submit</button>
    </div>
  )
}
