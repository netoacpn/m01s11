import "./style.css"
import React from "react"
import Button from "../button"

function Header(){

  return(
    <>
      <header>
        <div className="div-btn">
          <div className="btn"><Button to="/" text="Home"/></div>
          <div className="btn"><Button to="/about-me" text="About me"/></div>
          <div className="btn"><Button to="/portfolio" text="Portfolio"/></div>
          <div className="btn"><Button to="*" text="Erro 404"/></div>          
        </div>
      </header>
    </>
  )
}

export { Header }