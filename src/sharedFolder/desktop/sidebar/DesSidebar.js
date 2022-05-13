
import {DesSidebarData} from './DesSidebarData'
import './DesSidebaar.css'
export const DesSidebar = () => {
  return (
    <div className="-ml-4 bg-sidebg float-left pr-10  h-screen  rounded  overflow-y-visible">
        <ul className={`mt-4 menuItems`} >
                        {DesSidebarData.map((value,key)=>{
                            return (
                                <li key={key} id={window.location.pathname===value.link ? "menuList" :""} onClick={()=>window.location.pathname=value.link} className="flex mb-2 cursor-pointer classMenuList ml-8">
                                    <div className="flex py-4 ml-6" id="iconTitle">
                                        <div className="text-white" id="icon">{value.icon}</div>
                                        <div className="text-xl text-white font-semibold  ml-4 pr-4" id="menuTitle">{value.title}</div>
                                    </div>
                                </li>
                            )
                        })}
        </ul>
    </div>
  )
}