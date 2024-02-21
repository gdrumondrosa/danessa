import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Descrição</div>
        <div className="descriptionbox-nav-box fade">Avaliações (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quos est repudiandae possimus provident labore dignissimos, repellendus ratione ipsa dolor asperiores molestiae delectus et? Asperiores placeat natus dicta ullam quibusdam?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos nesciunt quas exercitationem quia iste culpa quo! Provident cum dignissimos asperiores, quam dolorum fugiat quod blanditiis a ipsa vero repellat doloremque?</p>
      </div>
    </div>
  )
}

export default DescriptionBox