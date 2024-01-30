import React from "react";
import './Presentation.css'
import tradicional_image from '../Assets/tradicional.png'
import diet_image from '../Assets/diet.png'
import picante_image from '../Assets/picante.png'

const Presentation = () => {
  return (
    <div className="presentation">
      <h1>CONHEÇA OS NOSSO SABORES</h1>
      <hr />
      <div className="presentations">
        <div className="products">
          <div className="tradicional-img">
            <img src={tradicional_image} alt="" />
          </div>
          <p>O primeiro e mais popular capuccino da família. Feito a base de Leite em pó, chocolate, café e açucar.</p>
        </div>
        <div className="products">
          <div className="diet-img">
            <img src={diet_image} alt="" />
          </div>
          <p>Melhor opção para quem quer saborear o capuccino sem sair da dieta. Feito a base de leite s/lactose, cacau 100% e café.</p>
        </div>
        <div className="products">
          <div className="picante-img">
            <img src={picante_image} alt="" />
          </div>
          <p>Novidade que já conquistou o cliente. Capuccino Tradicional <text style={{fontStyle: "italic"}}>Da Nêssa</text> com adição de gengibre e canela.</p>
        </div>
      </div>
    </div>
  )
}

export default Presentation