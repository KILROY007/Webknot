import React from 'react'
import {Input} from '../../Input'
export const DesCreate = () => {
  return (
    <div>
        <h1 className="text-3xl font-semibold ml-72">Create</h1>
        <div className="ml-72 text-xl">
            <Input text="Title:"/>
            <div className="grid grid-cols-2">
                <Input text="Type:"/>
                <Input text="Priority:"/>
                <Input text="Affects Version/s:"/>
                <Input text="Component/s:"/>
                <Input text="labels:"/>
                <Input text="Story Point:" />
                <Input text="Status:" />
                <Input text="Resolution:" />
                <Input text="Fix Version/s:"  />
                <Input text="Assignee:" />
                <Input text="Reporter:" />
                <Input text="Description:" />
                <div className="flex justify-between">
                    <Input text="Type:" type="file" placeholder="Attach a file" />
                    <div>
                        <button className="text-xl bg-blue-600  rounded-xl text-white mt-16 py-2 px-6">Submit {`>`}</button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}
