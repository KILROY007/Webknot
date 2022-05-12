import React from 'react'
import graph from '../../../styles/img/Graph.png'
import profilePic2 from "../../../styles/img/profilePic2.jfif"
import profilePic3 from "../../../styles/img/profilePic3.webp"
import profilePic4 from "../../../styles/img/profilePic4.jfif"
import profilePic from "../../../styles/img/Resume pic.jpeg"
import {Card} from "../../../sharedFolder/Card"
import {Peoplecard} from "../../../sharedFolder/Peoplecard"

export const MobileDash = () => {
    
  return (
    <div>
        <div className="flex justify-between mt-10">
            <h1 className="text-2xl font-semibold  ml-4">Dashboard</h1>
            <h1 className="text-meddium mr-4 mt-2"><span className="text-large text-gray-500">Filter:</span> Project</h1>
        </div> 
        <div className="graph flex justify-center mt-2">
            <img src={graph} alt="" className="h-52 w-96"></img>
        </div>
        <div className=" priority grid grid-cols-3 gap-12 ml-6 overflow-hidden">
            <div className="highPriority grid grid-cols-1">
                <button className="text-sm font-semibold">High Priority</button>
                <div className={` ml-4`} >
                    <Card dateText="January 02, 2019"/>
                    <Card dateText="January 05, 2019"/>
                    <Card dateText="January 06, 2019"/>
                    <Card dateText="January 11, 2019"/>
                    <div className="flex justify-end w-80">
                        <button className="text-blue-600 mb-10 mt-6">View all {'>'}</button>
                    </div>
                </div>   
            </div>
            <div className="Recent">
                <button className="text-sm font-semibold">Recently updated</button>
                <div className={`hidden`}>
                    <Card dateText="January 16, 2019"/>
                    <Card dateText="January 15, 2019"/>
                    <Card dateText="January 15, 2019"/>
                    <Card dateText="January 13, 2019"/>
                    <div className="flex justify-end w-80">
                        <button className="text-blue-600 mb-10 mt-6">View all {'>'}</button>
                    </div>
                </div>
            </div> 
            <div className="all">
                <h1 className="text-sm font-semibold">All issues</h1>
                <div className={`hidden`}>
                    <Peoplecard profilePic={profilePic} name='Sijo M Peter' job="UI/UX Designer" barColor="red" width="w-64" noOfIssues="8" totalIssues="10"/>
                    <Peoplecard profilePic={profilePic2} name='Vivan Gupta' job="Technical Assosiate" barColor="blue" width="w-44" noOfIssues="4" totalIssues="8"/>
                    <Peoplecard profilePic={profilePic3} name='Sanal Khanna' job="UI/UX Designer" barColor="yellow" width="w-28" noOfIssues="2" totalIssues="4"/>
                    <Peoplecard profilePic={profilePic4} name='Sanvi Joseph' job="Technical Assosiate" barColor="green" width="w-12" noOfIssues="1" totalIssues="4"/>
                    <div className="flex justify-end w-80">
                        <button className="text-blue-600 mb-10 mt-6">View all {'>'}</button>
                    </div>
                </div>
            </div>  
        </div> 
    </div>
  )
}
