import React from "react";
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.jpeg'
import hero_image2 from '../Assets/hero_image2.jpeg'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>KITS DA NÊSSA</h2>
        <div>
          <p>presentes</p>
          <p>para todos</p>
          <p>os gostos</p>
        </div>
        <div className="hero-latest-btn">
          <div>Monte seu Kit</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
        <img src={hero_image2} alt="" />
      </div>
    </div>
  )
}

export default Hero