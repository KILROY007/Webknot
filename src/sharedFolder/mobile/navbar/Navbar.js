import React from "react";
import {MdNotificationsActive} from 'react-icons/md'
import {GoSearch} from 'react-icons/go'
import {BiDotsVerticalRounded} from 'react-icons/bi'
import { MuiDrawer } from "../drawer/MuiDrawer";

export default function Navbar(props) {
    return(
        <nav id="navbar">
            <div className="flex justify-between my-4 mx-4">
                <div className="flex">
                    <MuiDrawer/>
                    <img src={props.logo} alt="" className={`h-8`}></img>
                    <h1 className={`text-2xl ${props.logoTextStyle}`}>{props.logoText}</h1>
                </div>
                <div className="flex w-36 justify-evenly">
                    <span className={`text-3xl ${props.notiColor}`}><MdNotificationsActive/></span>
                    <span className={`text-3xl ${props.searchColor}`}><GoSearch/></span>
                    <span className={`text-3xl ${props.sideMenuColor}`}><BiDotsVerticalRounded/></span>
                </div>
            </div>
        </nav>
    )
}

