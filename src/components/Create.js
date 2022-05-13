import React from 'react'
import { useMediaQuery } from 'react-responsive'
import {MobCreate} from "../sharedFolder/mobile/create/MobCreate"
import {DesCreate} from "../sharedFolder/desktop/create/DesCreate"
export const Create = () => {
    const isDesktop = useMediaQuery({ query: '(min-width: 794px)' })
  return (
    <div> 
        {
            isDesktop ? <DesCreate/>:<MobCreate/>
        }        
    </div>
  )
}
