import './App.css'
import {Dashboard} from './components/Dashboard';
import {Issues} from './components/Issues';
import {Create} from './components/Create';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { DesNavbar } from "./sharedFolder/desktop/navbar/DesNavbar";
import Navbar from "./sharedFolder/mobile/navbar/Navbar";
import logo from "./styles/img/TrackerLogo.png"
import profilePic from "./styles/img/Resume pic.jpeg"
import { useMediaQuery } from 'react-responsive'
import {DesSidebar} from "./sharedFolder/desktop/sidebar/DesSidebar"

function App() {
  const isDesktop = useMediaQuery({ query: '(min-width: 794px)' })
  return (
    <BrowserRouter>
      {
            isDesktop ? <DesNavbar logo={logo}  logoTextStyle="font-semibold"  logoText="tracker" logoTextColor="text-gray-8n00" notiColor="text-gray-400" searchColor="text-gray-400" sideMenuColor="text-gray-400" profilePic={profilePic}/> : 
            <Navbar logo={logo}  logoTextStyle="font-bold"  logoText="tracker" notiColor="text-gray-400" searchColor="text-gray-400" sideMenuColor="text-gray-400" />
      }
      {
            isDesktop ? <DesSidebar/> : null
      }
      <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/issues" element={<Issues/>}/>
          <Route path="/create" element={<Create/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
