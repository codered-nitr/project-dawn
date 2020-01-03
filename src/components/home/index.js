import React from 'react'
import '../../css/home.css'
import Slider from 'react-slick'
import { IconContext } from 'react-icons'
import { AiOutlineMinus } from 'react-icons/ai'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'

const Home = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 1,
    centerMode: true,
    className: "center",
    centerPadding: "60px",
    swipeToSlide: true,
    fade: true,
    draggable: true,
    customPaging: i => (
      <div><IconContext.Provider value = {{color: "#FA3264", size: "2em"}}><AiOutlineMinus /></IconContext.Provider></div>
    ),
  }
  return (
    <div className = "bottomPadding contain center">
      <div className = "bottomPadding">
      <Slider {...settings}>
        <div className = "d-block contain ctr"><img src = {require('../../img/Enigma Coming soon.png')} /></div>
        <div className = "d-block contain ctr"><img src = {require('../../img/EnigmaTopics.png')} /></div>
        <div className = "d-block contain ctr"><img src = {require('../../img/CodeRed Inductions.png')} /></div>
      </Slider>
      </div>
    </div>
  )
}

export default Home