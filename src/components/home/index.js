import React, { useRef } from 'react'
import '../../css/home.css'
import { IconContext } from 'react-icons'
import { Carousel, Row, Image, Button, Col } from 'react-bootstrap'
import { AiFillCaretDown } from 'react-icons/ai'
import About from './about'
import Fly from './fly'
import 'holderjs'
import { BrowserView, MobileView } from 'react-device-detect'
import Team from './team'

const Home = () => {
  const aboutRef = useRef(null)
  const scrollToAbout = () => window.scrollTo(0, aboutRef.current.offsetTop-50)
  return(
    <div className = "bottomPadding contain center">
      <Fly />
      <div className = "bottomPadding">
        <Carousel>
          <Carousel.Item>
            <Row><Image src = "holder.js/800x200?text= &bg=rgba(0,0,0,0.0)&fg=#ffffff" /></Row>
            <Row className = "justify-content-md-center">
              <Col></Col>
              <Col>
                <BrowserView><Image src = "holder.js/800x200?text= &bg=rgba(0,0,0,0.0)&fg=#ffffff" /></BrowserView>
                <MobileView><div style = {{marginLeft: "auto", marginRight: "auto"}}><Image style = {{width: "400px", height: "200px", textAlign:"center"}} src = {require('../../img/code-red.png')} /></div></MobileView>
              </Col>
              <Col></Col>
            </Row>
            <Row><Image src = {require('../../img/knowUs.png')} /></Row>
            <Carousel.Caption>
              <div className = "bounce" onClick = {scrollToAbout}>
                <IconContext.Provider value = {{color: "#FA3264", size: "3em"}}><AiFillCaretDown /></IconContext.Provider>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item><img src = {require('../../img/Enigma Coming soon.png')} /></Carousel.Item>
          <Carousel.Item>
            <img src = {require('../../img/EnigmaTopics.png')} />
            <Carousel.Caption>
              <a href="https://bit.ly/enigmanitr" target="_blank"><Button variant="success">Register Now!</Button></a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item><img src = {require('../../img/CodeRed Inductions.png')} /></Carousel.Item>
        </Carousel>
      </div>
      <div ref = {aboutRef} className = "bottomPadding">
        <About />
      </div>
      <Team />
    </div>
  )
}

export default Home

export { Fly }