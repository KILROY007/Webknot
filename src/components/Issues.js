import React from 'react'
import { DesNavbar } from "../sharedFolder/desktop/navbar/DesNavbar";
import Navbar from "../sharedFolder/mobile/navbar/Navbar";
import { useMediaQuery } from 'react-responsive'
import profilePic from "../styles/img/Resume pic.jpeg"
import logo from "../styles/img/TrackerLogo.png"
import {DesSidebar} from "../sharedFolder/desktop/sidebar/DesSidebar"
import {DesIssues} from "../sharedFolder/desktop/issues/DesIssues"
import {MobIssues} from "../sharedFolder/mobile/issues/MobIssues"

export const Issues = () => {
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
                isDesktop ? <DesIssues/> : <MobIssues/>
            }
      </div>
    
  )
}
