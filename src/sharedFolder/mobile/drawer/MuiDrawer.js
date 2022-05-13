import { Drawer, Box, IconButton } from '@mui/material'
import { useState } from 'react'
import {ImStatsBars} from 'react-icons/im'
import {GiNotebook} from 'react-icons/gi'
import {RiPenNibFill} from 'react-icons/ri'
import './drawer.css'
import {HiOutlineMenuAlt1} from 'react-icons/hi'
export const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  
  return (
    <>
      <IconButton
        onClick={() => setIsDrawerOpen(true)}
        size='large'
        edge='start'
        color='inherit'
        aria-label='logo'
        padding-top="0">
        <span className="text-blue-700 -mt-2"><HiOutlineMenuAlt1  /></span>
      </IconButton>
      <Drawer
        anchor='left'
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        >
        <Box p={2} width='250px' role='presentation' textAlign='left' backgroundColor="#1c2237" height="100vh">
          <div className="sideBar text-white">
            <div className="text-3xl font-semibold">Menu</div>
            <div className="flex gap-4 mb-8 mt-8" id={window.location.pathname==='/' ? "menuList" : ""}>
              <span className="mt-1 text-3xl"><ImStatsBars/></span>
              <button className="text-2xl font-medium" 
               onClick={()=>window.location.pathname=''}>Dashboard</button> 
            </div>
            <div className="flex gap-4 mb-8"id={window.location.pathname==='/issues' ? "menuList" : ""} >
              <span className="mt-1 text-3xl"><GiNotebook/></span>
              <button className="text-2xl font-medium" 
               onClick={()=>window.location.pathname='/issues'}>Issues</button>
            </div>
            <div className="flex gap-4"  id={window.location.pathname==='/create' ? "menuList" : ""}>
              <span className="mt-1 text-3xl"><RiPenNibFill/></span>
              <button className="text-2xl font-medium" 
              onClick={()=>window.location.pathname='/create'}>Create</button>
            </div>
          </div>
        </Box>
      </Drawer>
    </>
  )
}