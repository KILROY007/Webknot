import React from 'react'
import {IssueCard} from '../../IssueCard'
import profilePic from "../../../styles/img/Resume pic.jpeg"
export const DesIssues = () => {
  return (
    <div>
        <div className="flex justify-between mt-10">
            <h1 className="text-3xl font-semibold  ml-10">Issues</h1>
            <h1 className="text-meddium mr-12 mt-2"><span className="text-large text-gray-500">Filter:</span> Project</h1>
        </div>
        <div className=" priority grid grid-cols-3 ml-80 mt-12 gap-8">
            <div className="highPriority ">
                <h1 className="text-2xl font-semibold">To Do 5</h1>
                <IssueCard dateText="January 2, 2019" profilePic={profilePic} bgColor="bg-red-600" status="High Priority" />
                <IssueCard dateText="January 5, 2019" profilePic={profilePic} bgColor="bg-red-600" status="High Priority" />
                <IssueCard dateText="January 6, 2019" profilePic={profilePic} bgColor="bg-orange-600" status="Low Priority" />
                <IssueCard dateText="January 11, 2019" profilePic={profilePic} bgColor="bg-red-600" status="High Priority" />
                <IssueCard dateText="January 11, 2019" profilePic={profilePic} bgColor="bg-orange-600" status="Low Priority" />
                
            </div>
            <div className="Recent">
                <h1 className="text-2xl font-semibold">In Progress 2</h1>
                <IssueCard dateText="January 11, 2019" profilePic={profilePic} bgColor="bg-yellow-600" status="In Progress" />
                <IssueCard dateText="January 11, 2019" profilePic={profilePic} bgColor="bg-yellow-600" status="ln Progress" />
                
            </div> 
            <div className="all">
                <h1 className="text-2xl font-semibold">Done 4</h1>
                <IssueCard dateText="January 11, 2019" profilePic={profilePic} bgColor="bg-green-600" status="Done" />
                <IssueCard dateText="January 11, 2019" profilePic={profilePic} bgColor="bg-green-600" status="Done" />
                <IssueCard dateText="January 11, 2019" profilePic={profilePic} bgColor="bg-green-600" status="Done" />
            </div>  
        </div>  
    </div>
  )
}
