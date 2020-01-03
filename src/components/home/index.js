import React, { useRef } from 'react'
import '../../css/home.css'
import { IconContext } from 'react-icons'
import { Carousel } from 'react-bootstrap'
import { AiFillCaretDown } from 'react-icons/ai'
import About from './about'

const Home = () => {
  const aboutRef = useRef(null)
  const scrollToAbout = () => window.scrollTo(0, aboutRef.current.offsetTop)
  return(
    <div className = "bottomPadding contain center">
      <div className = "bottomPadding">
        <Carousel>
          <Carousel.Item><Carousel.Caption><div className = "bounce" onClick = {scrollToAbout}>
              <IconContext.Provider value = {{color: "#FA3264", size: "3em"}}><AiFillCaretDown /></IconContext.Provider>
          </div></Carousel.Caption></Carousel.Item>
          <Carousel.Item><img src = {require('../../img/Enigma Coming soon.png')} /></Carousel.Item>
          <Carousel.Item><img src = {require('../../img/EnigmaTopics.png')} /></Carousel.Item>
          <Carousel.Item><img src = {require('../../img/CodeRed Inductions.png')} /></Carousel.Item>
        </Carousel>
      </div>
      <div ref = {aboutRef}>
        <About />
      </div>
    </div>
  )
}

export default Home