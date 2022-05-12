import React from 'react'
import {Input} from '../../Input'
export const MobCreate = () => {
  return (
    <div>
        <h1 className="text-3xl font-semibold ml-5">Create</h1>
        <Input text="Title:"  />
        <Input text="Type:" />
        <Input text="Priority:" />
        <Input text="Affects Version/s:" />
        <Input text="Component/s:" />
        <Input text="labels:" />
        <Input text="Story Point:"  />
        <Input text="Status:" />
        <Input text="Resolution:" />
        <Input text="Fix Version/s:"  />
        <Input text="Assignee:" />
        <Input text="Reporter:" />
        <Input text="Description:" />
        <Input text="type:" placeholder="Attach a file" />
        <button className="text-3xl bg-blue-600 px-8 py-2 w-screen mx-8 rounded-xl text-white">Submit</button>
    </div>
  )
}
