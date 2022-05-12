import React from 'react'
import {GoSearch} from 'react-icons/go'

export const DesNavbar = (props) => {
  return (
    <nav id="DesNavbar">
    <div className="flex justify-between my-4 mx-4">
        <div className="flex ">
            <img src={props.logo} alt="" className={`h-12`}></img>
            <h1 className={`text-3xl tracking-widest ${props.logoTextStyle} ${props.logoTextColor} mt-2`}>{props.logoText}</h1>
            <span className={`text-2xl ${props.searchColor} mt-4 ml-20`}><GoSearch/></span> 
            <span className={`${props.searchColor} text-large mt-4 ml-2`}>Search..</span>
        </div>
        <div> 
            <img src={props.profilePic} className={`h-12 rounded-3xl mr-8`} alt=""></img>
        </div>
    </div>
</nav>
  )
}
