import React from 'react'
import { IssueCard } from '../../IssueCard'
import profilePic from "../../../styles/img/Resume pic.jpeg"
export const MobIssues = () => {
  return (
    <div>
        <div className="flex justify-between mt-8">
            <h1 className="text-3xl font-semibold  ml-6">Issues</h1>
            <h1 className="text-meddium mr-12 mt-2"><span className="text-large text-gray-500">Filter:</span> Project</h1>
        </div>
        <div className="highPriority md:ml-6 mt-10 ml-16 mr-20">
                <h1 className="text-2xl font-semibold ">To Do 5</h1>
                <IssueCard dateText="January 2, 2019" profilePic={profilePic} bgColor="bg-red-600" status="High Priority" />
                <IssueCard dateText="January 5, 2019" profilePic={profilePic} bgColor="bg-red-600" status="High Priority" />
                <IssueCard dateText="January 6, 2019" profilePic={profilePic} bgColor="bg-orange-600" status="Low Priority" />
                <IssueCard dateText="January 11, 2019" profilePic={profilePic} bgColor="bg-red-600" status="High Priority" />
                <IssueCard dateText="January 11, 2019" profilePic={profilePic} bgColor="bg-orange-600" status="Low Priority" />
                
            </div>
    </div>
  )
}
