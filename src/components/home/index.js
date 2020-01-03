import React from 'react'
import '../../css/home.css'
import { IconContext } from 'react-icons'
import { Carousel } from 'react-bootstrap'
import { FaAngleRight } from 'react-icons/fa'

const Home = () => {
  return(
    <div className = "bottomPadding contain center">
      <Carousel>
        <Carousel.Item><img src = {require('../../img/Enigma Coming soon.png')} /></Carousel.Item>
        <Carousel.Item><img src = {require('../../img/EnigmaTopics.png')} /></Carousel.Item>
        <Carousel.Item><img src = {require('../../img/CodeRed Inductions.png')} /></Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Home