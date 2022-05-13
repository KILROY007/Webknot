import React from 'react'
import {ImStatsBars} from 'react-icons/im'
import {GiNotebook} from 'react-icons/gi'
import {RiPenNibFill} from 'react-icons/ri'
export const DesSidebarData=[
    {   
        title: 'Dashboard',
        icon:<ImStatsBars style={{ fontSize:"1.875rem",lineHeight:"1.25rem" }}/>,
        link:"/"
    },
    {
        title: 'Issues',
        icon:<GiNotebook style={{ fontSize:"1.875rem",lineHeight:"1.25rem" }}/>,
        link:"/issues"
    },
    {
        title: 'Create',
        icon:<RiPenNibFill style={{ fontSize:"1.875rem",lineHeight:"1.25rem" }}/>,
        link:"/create"
    },
]
    

