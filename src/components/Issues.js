import React from 'react'
import { useMediaQuery } from 'react-responsive'
import {DesIssues} from "../sharedFolder/desktop/issues/DesIssues"
import {MobIssues} from "../sharedFolder/mobile/issues/MobIssues"

export const Issues = () => {
    const isDesktop = useMediaQuery({ query: '(min-width: 794px)' })
  return (
      <div>
            {
                isDesktop ? <DesIssues/> : <MobIssues/>
            }
      </div>
    
  )
}
