import React from "react";
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.jpeg'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2><text style={{fontStyle: "italic"}}>DA NÊSSA</text> CAPUCCINO</h2>
        <div>
          <p>a perfeita</p>
          <p>combinação de</p>
          <p>café, leite, cacau e</p>
          <p>um toque <text style={{fontStyle: "italic"}}>Da Nêssa</text></p>
        </div>
        <div className="hero-latest-btn">
          <div>Confira já</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero