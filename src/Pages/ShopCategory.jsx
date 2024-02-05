import React, { useContext } from "react";
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className="shop-category">
      <div className="shopcategory-indexSort">
        <p>
          <span>Exibindo 1-{props.items}</span> de 8 produtos
        </p>
        <div className="shopcategory-sort">
          Ordenar por <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if(props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
          }
          else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore Mais
      </div>
    </div>
  )
}

export default ShopCategory