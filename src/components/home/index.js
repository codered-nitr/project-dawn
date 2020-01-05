import React, { useRef } from 'react'
import '../../css/home.css'
import { IconContext } from 'react-icons'
import { Carousel, Row, Image } from 'react-bootstrap'
import { AiFillCaretDown } from 'react-icons/ai'
import About from './about'
import Fly from './fly'
import 'holderjs'

const Home = () => {
  const aboutRef = useRef(null)
  const scrollToAbout = () => window.scrollTo(0, aboutRef.current.offsetTop)
  return(
    <div className = "bottomPadding contain center">
      <Fly />
      <div className = "bottomPadding">
        <Carousel>
          <Carousel.Item>
            <Row><Image src = "holder.js/800x200?text= &bg=rgba(0,0,0,0.0)&fg=#ffffff" /></Row>
            <Row><Image src = "holder.js/800x200?text= &bg=rgba(0,0,0,0.0)&fg=#ffffff" /></Row>
            <Row><Image src = {require('../../img/knowUs.png')} /></Row>
            <Carousel.Caption>
              <div className = "bounce" onClick = {scrollToAbout}>
                <IconContext.Provider value = {{color: "#FA3264", size: "3em"}}><AiFillCaretDown /></IconContext.Provider>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item><img src = {require('../../img/Enigma Coming soon.png')} /></Carousel.Item>
          <Carousel.Item><img src = {require('../../img/EnigmaTopics.png')} /></Carousel.Item>
          <Carousel.Item><img src = {require('../../img/CodeRed Inductions.png')} /></Carousel.Item>
        </Carousel>
      </div>
      <div ref = {aboutRef} className = "">
        <About />
      </div>
    </div>
  )
}

export default Home

export { Fly }