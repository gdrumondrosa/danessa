import React from "react";
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Seu Nome"/>
          <input type="email" placeholder="Endereço de Email"/>
          <input type="password" placeholder="Senha"/>
        </div>
        <button>Continuar</button>
        <p className="loginsignup-login">Já possui uma conta? <span>Login aqui</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id=""/>
          <p>Ao continuar, eu aceito os termos de uso & política de privacidade.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup