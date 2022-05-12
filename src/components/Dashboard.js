import Navbar from "../sharedFolder/mobile/navbar/Navbar";
import logo from "../styles/img/TrackerLogo.png"
import profilePic from "../styles/img/Resume pic.jpeg"
import { useMediaQuery } from 'react-responsive'
import { DesNavbar } from "../sharedFolder/desktop/navbar/DesNavbar";
import {DesSidebar} from "../sharedFolder/desktop/sidebar/DesSidebar"
import { DesDashboard } from "../sharedFolder/desktop/dashboard/DesDashboard";
import {MobileDash} from "../sharedFolder/mobile/dashboard/MobileDash"
export const Dashboard = () => {
    const isDesktop = useMediaQuery({ query: '(min-width: 794px)' })
    return(
        <div>
            {
                isDesktop ? <DesNavbar logo={logo}  logoTextStyle="font-semibold"  logoText="tracker" logoTextColor="text-gray-8n00" notiColor="text-gray-400" searchColor="text-gray-400" sideMenuColor="text-gray-400" profilePic={profilePic}/> : 
                <Navbar logo={logo}  logoTextStyle="font-bold"  logoText="tracker" notiColor="text-gray-400" searchColor="text-gray-400" sideMenuColor="text-gray-400" />
            }  
            {
                isDesktop ? <DesSidebar/> : null
            }
            {
                isDesktop ? <DesDashboard/> : <MobileDash/>
            }
            
        </div>
        
    )
}