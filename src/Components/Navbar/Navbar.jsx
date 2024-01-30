import React, { useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.jpeg'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {

  const [menu, setMenu] = useState("inicio")

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img className='nav-img' src={logo} alt="" />
      </div>
      <ul className='nav-menu'>
        <li onClick={() => {setMenu("inicio")}}><Link style={{textDecoration: 'none'}} to='/'>Início</Link>{menu === "inicio" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("capuccinos")}}><Link style={{textDecoration: 'none'}} to='/capuccinos'>Capuccinos</Link>{menu === "capuccinos" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("bomboccinos")}}><Link style={{textDecoration: 'none'}} to='/bomboccinos'>Bomboccinos</Link>{menu === "bomboccinos" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("outros")}}><Link style={{textDecoration: 'none'}} to='/outros'>Outros</Link>{menu === "outros" ? <hr/> : <></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar