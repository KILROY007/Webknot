import { useMediaQuery } from 'react-responsive'
import { DesDashboard } from "../sharedFolder/desktop/dashboard/DesDashboard";
import {MobileDash} from "../sharedFolder/mobile/dashboard/MobileDash"
export const Dashboard = () => {
    const isDesktop = useMediaQuery({ query: '(min-width: 794px)' })
    return(
        <div>
            {
                isDesktop ? <DesDashboard/> : <MobileDash/>
            }
            
        </div>
        
    )
}