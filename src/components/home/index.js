import React from 'react'
import './home.css'
import Slider from 'react-slick'

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 2,
    centerMode: true,
    className: "center",
    centerPadding: "60px",
    swipeToSlide: true,
    fade: true,
  }
  return (
    <div className = "bottomPadding">
      <Slider {...settings}>
        <div className = "d-block contain ctr"><img src = {require('../../img/Enigma Coming soon.png')} /></div>
        <div className = "d-block contain ctr"><img src = {require('../../img/EnigmaTopics.png')} /></div>
      </Slider>
    </div>
  )
}

export default Home