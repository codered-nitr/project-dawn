import React from 'react'
import 'holderjs'
import { Image, Row } from 'react-bootstrap'
import '../../css/team.css'
import { BrowserView } from 'react-device-detect'
import { IconContext } from 'react-icons'
import { TiSocialFacebookCircular, TiSocialGithubCircular, TiSocialLinkedinCircular } from 'react-icons/ti'

const team = [
  <div className = "black-back bottomPadding" style = {{width: "19.5rem", textAlign: "center", paddingTop: "18px", borderRadius: "10px"}}>
    <Image src = {require('../../img/av.png')} width = {200} roundedCircle />
    <span style = {{display: "inline-block", width: "100%", height: "2px", backgroundColor: "", marginBottom: ""}} />
    <span style = {{color: "whitesmoke"}}>Nishith G. Behera</span>
    <span style = {{display: "inline-block", width: "100%", height: "2px", backgroundColor: "whitesmoke", marginBottom: ""}} />
    <span style = {{color: "#FA3264"}}>Founder, President & Web Developer</span>
    <span style = {{display: "inline-block", width: "100%", height: "2px", backgroundColor: "whitesmoke", marginBottom: "10px"}} />
    <div style = {{paddingBottom: "10px"}}>
      <IconContext.Provider value = {{color: "#FA3264", size: "2em"}}>
        <a href = 'https://www.facebook.com/Nishith.G.Behera'><TiSocialFacebookCircular /></a>
        <a href = 'https://www.linkedin.com/in/ngbehera/'><TiSocialLinkedinCircular /></a>
        <a href = 'https://www.github.com/zenolus'><TiSocialGithubCircular /></a>
      </IconContext.Provider>
    </div>
  </div>,
  <div className = "black-back bottomPadding rightPadding" style = {{width: "18rem", textAlign: "center", paddingTop: "18px", borderRadius: "10px"}}>
    <Image src = {require('../../img/nayak.png')} width = {170} roundedCircle />
    <span style = {{display: "inline-block", width: "100%", height: "2px", backgroundColor: "", marginBottom: ""}} />
    <span style = {{color: "whitesmoke"}}>Ashutosh Nayak</span>
    <span style = {{display: "inline-block", width: "100%", height: "2px", backgroundColor: "whitesmoke", marginBottom: ""}} />
    <span style = {{color: "#FA3264"}}>Secretary & Content Head</span>
    <span style = {{display: "inline-block", width: "100%", height: "2px", backgroundColor: "whitesmoke", marginBottom: "10px"}} />
    <div style = {{paddingBottom: "10px"}}>
      <IconContext.Provider value = {{color: "#FA3264", size: "2em"}}>
        <a href = 'https://www.facebook.com/profile.php?id=100004191180360'><TiSocialFacebookCircular /></a>
        <a href = 'https://www.linkedin.com/in/ashutosh-nayak-a67117173/'><TiSocialLinkedinCircular /></a>
        <a href = 'https://www.github.com/nayakashutosh9'><TiSocialGithubCircular /></a>
      </IconContext.Provider>
    </div>
  </div>,
  <div className = "black-back bottomPadding rightPadding" style = {{width: "18rem", textAlign: "center", paddingTop: "18px", borderRadius: "10px"}}>
    <Image src = {require('../../img/nihar.png')} width = {170} roundedCircle />
    <span style = {{display: "inline-block", width: "100%", height: "2px", backgroundColor: "", marginBottom: ""}} />
    <span style = {{color: "whitesmoke"}}>Nihar R. Mohanty</span>
    <span style = {{display: "inline-block", width: "100%", height: "2px", backgroundColor: "whitesmoke", marginBottom: ""}} />
    <span style = {{color: "#FA3264"}}>Treasurer & Management Head  </span>
    <span style = {{display: "inline-block", width: "100%", height: "2px", backgroundColor: "whitesmoke", marginBottom: "10px"}} />
    <div style = {{paddingBottom: "10px"}}>
      <IconContext.Provider value = {{color: "#FA3264", size: "2em"}}>
        <a href = 'https://www.facebook.com/profile.php?id=100009316129423'><TiSocialFacebookCircular /></a>
        <a href = 'https://www.linkedin.com/in/nihar-mohanty-b22248172/'><TiSocialLinkedinCircular /></a>
      </IconContext.Provider>
    </div>
  </div>,
  <div className = "black-back bottomPadding rightPadding" style = {{width: "18rem", textAlign: "center", paddingTop: "18px", borderRadius: "10px"}}>
    <Image src = {require('../../img/mahesh.png')} width = {170} roundedCircle />
    <span style = {{display: "inline-block", width: "100%", height: "2px", backgroundColor: "", marginBottom: ""}} />
    <span style = {{color: "whitesmoke"}}>Mahesh Pati</span>
    <span style = {{display: "inline-block", width: "100%", height: "2px", backgroundColor: "whitesmoke", marginBottom: ""}} />
    <span style = {{color: "#FA3264"}}>Design Head</span>
    <span style = {{display: "inline-block", width: "100%", height: "2px", backgroundColor: "whitesmoke", marginBottom: "10px"}} />
    <div style = {{paddingBottom: "10px"}}>
      <IconContext.Provider value = {{color: "#FA3264", size: "2em"}}>
        <a href = 'https://www.facebook.com/profile.php?id=100004054251624'><TiSocialFacebookCircular /></a>
        <a href = 'https://www.linkedin.com/in/mahesh-pati-1a6b96184/'><TiSocialLinkedinCircular /></a>
      </IconContext.Provider>
    </div>
  </div>,
  <div className = "black-back bottomPadding rightPadding" style = {{width: "18rem", textAlign: "center", paddingTop: "18px", borderRadius: "10px"}}>
    <Image src = {require('../../img/mohit.png')} width = {170} roundedCircle />
    <span style = {{display: "inline-block", width: "100%", height: "2px", backgroundColor: "", marginBottom: ""}} />
    <span style = {{color: "whitesmoke"}}>Mohit Swain</span>
    <span style = {{display: "inline-block", width: "100%", height: "2px", backgroundColor: "whitesmoke", marginBottom: ""}} />
    <span style = {{color: "#FA3264"}}>Technical Head</span>
    <span style = {{display: "inline-block", width: "100%", height: "2px", backgroundColor: "whitesmoke", marginBottom: "10px"}} />
    <div style = {{paddingBottom: "10px"}}>
      <IconContext.Provider value = {{color: "#FA3264", size: "2em"}}>
        <a href = 'https://www.facebook.com/profile.php?id=100026079830736'><TiSocialFacebookCircular /></a>
        <a href = 'https://www.linkedin.com/in/mohit-swain-720379125/'><TiSocialLinkedinCircular /></a>
        <a href = 'https://www.github.com/Mohit-Swain'><TiSocialGithubCircular /></a>
      </IconContext.Provider>
    </div>
  </div>
]

const Team = () => {
  return(
    <div>
      <div className = "bottomPadding" style = {{marginLeft: "auto", marginRight: "auto"}}><Image src = {require('../../img/meet.png')} /></div>
      <div className = "bottomPadding" style = {{marginLeft: "auto", marginRight: "auto", width: "max-content"}}>{team[0]}</div>
      <div className = "bottomPadding" style = {{marginLeft: "auto", marginRight: "auto"}}>
        <span style = {{display: "inline-block"}}>{team[1]}</span>
        <span style = {{display: "inline-block"}}>{team[2]}</span>
        <span style = {{display: "inline-block"}}>{team[3]}</span>
        <span style = {{display: "inline-block"}}>{team[4]}</span>
      </div>
    </div>
  )
}

export default Team