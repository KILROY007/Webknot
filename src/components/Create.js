import React from 'react'
import { useMediaQuery } from 'react-responsive'
import profilePic from "../styles/img/Resume pic.jpeg"
import { DesNavbar } from "../sharedFolder/desktop/navbar/DesNavbar";
import {DesSidebar} from "../sharedFolder/desktop/sidebar/DesSidebar"
import Navbar from "../sharedFolder/mobile/navbar/Navbar";
import logo from "../styles/img/TrackerLogo.png"
import {MobCreate} from "../sharedFolder/mobile/create/MobCreate"
import {DesCreate} from "../sharedFolder/desktop/create/DesCreate"
export const Create = () => {
    const isDesktop = useMediaQuery({ query: '(min-width: 794px)' })
  return (
    <div>
        {
            isDesktop ? <DesNavbar logo={logo}  logoTextStyle="font-semibold"  logoText="tracker" logoTextColor="text-gray-8n00" notiColor="text-gray-400" searchColor="text-gray-400" sideMenuColor="text-gray-400" profilePic={profilePic}/> : 
            <Navbar logo={logo}  logoTextStyle="font-bold"  logoText="tracker" notiColor="text-gray-400" searchColor="text-gray-400" sideMenuColor="text-gray-400" />
        }  
        {
            isDesktop ? <DesSidebar/> : null
        }
        {
            isDesktop ? <DesCreate/>:<MobCreate/>
        }        
    </div>
  )
}
