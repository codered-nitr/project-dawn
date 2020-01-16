import React, { useState } from 'react'
import OnImagesLoaded from 'react-on-images-loaded'
import { ScaleLoader } from 'react-spinners'
import { Fly } from '../home'

const withSplash = Component => props => {
  const [loading, setLoading] = useState(true)
  return(
    <OnImagesLoaded onLoaded = {() => setLoading(false)} placeholder = {<Loader loading={loading} />}>
      {loading ? null : <Component {...props} />}
    </OnImagesLoaded>
  )
}

const Loader = ({loading}) => (
  <div>
    {loading?
    <div className = "area">
      <Fly />
      <div style = {{height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <ScaleLoader
          height={125}
          margin={15}
          width={6}
          color={"#FA3264"}
        />
      </div>
    </div>
    :null}
  </div>
)

export { withSplash }