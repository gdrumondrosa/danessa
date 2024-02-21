import React, { useContext } from "react";
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
  const {getTotalCartAmount, all_product, cartItems, removeFromCart} = useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Produtos</p>
        <p>Título</p>
        <p>Preço</p>
        <p>Quantidade</p>
        <p>Total</p>
        <p>Remover</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if(cartItems[e.id] > 0) {
          return <div>
                   <div className="cartitems-format cartitems-format-main">
                     <img src={e.image} alt="" className="carticon-product-icon"/>
                     <p>{e.name}</p>
                     <p>R${e.price},00</p>
                     <button className="cartitems-quantity">{cartItems[e.id]}</button>
                     <p>R${e.price*cartItems[e.id]},00</p>
                     <img className='cartitems-remove-icon' src={remove_icon} onClick={() => {removeFromCart(e.id)}} alt="" />
                   </div>
                   <hr />
                 </div>
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Resumo</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>R${getTotalCartAmount()},00</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Taxa de Frete</p>
              <p>Gratuita</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>R${getTotalCartAmount()},00</h3>
            </div>
          </div>
          <button>CONFERIR PEDIDO</button>
        </div>
        <div className="cartitems-promocode"></div>
      </div>
    </div>
  )
}

export default CartItems