import React from 'react'
import '../../css/maintenance.css'
import { Fly } from '../home'

const Maintenance = () => {
  return(
    <div className = "center maintenance">
      <Fly />
      <h1>This web page is under maintenance!</h1>
      <img 
        src = "https://www.gadgeon.com/theme/cms_image/1559541421_application-maintenance.png"
      />
      <h3>Please come back later.</h3>
    </div>
  )
}

export default Maintenance