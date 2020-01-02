import React from 'react'
import './footer.css'
import { IconContext } from 'react-icons'
import { TiSocialFacebookCircular, TiSocialInstagramCircular, TiSocialLinkedinCircular, TiSocialGithubCircular } from 'react-icons/ti'
import { GiTechnoHeart } from 'react-icons/gi'
import { FaCode, FaCoffee } from 'react-icons/fa'
import { DiOpensource } from 'react-icons/di'

const Footer = () => {
  return(
    <div>
      <div className = "foot">
        <div className = "about f-inline">
          <div className = "f-title">ABOUT</div>
          <div className = "f-body">
            Code Red is a club under the Technical Society of National Institute of Technology Rourkela, centralized on improving the coding culture of the college. We conduct workshops, regular classes, and online contests to indulge budding minds in the sport of competitive programming.
          </div>
          <div className = "social-links">
            <IconContext.Provider value = {{color: "#FA3264", size: "2em"}}>
              <div>
                <a href = 'https://www.facebook.com/coderednitrkl'><TiSocialFacebookCircular /></a>
                <a href = 'https://www.instagram.com/codered.nitrkl/'><TiSocialInstagramCircular /></a>
                <a href = 'https://www.linkedin.com/company/the-code-red-club/'><TiSocialLinkedinCircular /></a>
                <a href = 'https://www.github.com/codered-nitr'><TiSocialGithubCircular /></a>
              </div>
            </IconContext.Provider>
          </div>
        </div>
        <div className = "events f-inline">
          <div className = "f-title">EVENTS</div>
          <div className = "f-body">
            To be updated soon.
          </div>
        </div>
        <div className = "contact-info f-inline">
          <div className = "f-title">CONTACT INFO</div>
          <div className = "f-body">
            <p><strong className = "cinfo">Address: </strong>
            Student Activity Centre, Sector 1, National Institute of Technology, Rourkela.
            Odisha, India.
            PIN:769008</p>
            <p><strong className = "cinfo">Email: </strong><a href = "mailto:codered.nitrkl@gmail.com">codered.nitrkl@gmail.com</a></p>
          </div>
        </div>
        <div className = "nitr-logo f-inline">
          <img src = 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/NIT_Rourkela_Colour_Logo_SVG.svg/1200px-NIT_Rourkela_Colour_Logo_SVG.svg.png' />
        </div>
      </div>
      <div className = "sub-footer">
        <div className = "center">
          <IconContext.Provider value = {{color: "#FA3264", size: "1.5em"}}>
            <FaCode /> with <GiTechnoHeart /> & <FaCoffee />
          </IconContext.Provider>
        </div>
        <div className = "center">
          <IconContext.Provider value = {{color: "#FA3264", size: "1.5em"}}>
            <a href = 'https://www.github.com/codered-nitr/project-dawn'><DiOpensource /></a>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  )
}

export default Footer