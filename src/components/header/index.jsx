import "./style.css"
import React from "react"
import Button from "../button"

function Header(){
  function handleClickHome(){
    alert("Home")
  }
  function handleClickAbout(){
    alert("About me")
  }
  function handleClickPortfolio(){
    alert("Portfolio")
  }
  function handleClick404(){
    alert("Erro 404")
  }
  return(
    <>
      <header>
        <div className="div-btn">
          <div className="btn"><Button text="Home" onClick={handleClickHome}/></div>
          <div className="btn"><Button text="About me" onClick={handleClickAbout}/></div>
          <div className="btn"><Button text="Portfolio" onClick={handleClickPortfolio}/></div>
          <div className="btn"><Button text="Erro 404" onClick={handleClick404}/></div>
        </div>
      </header>
    </>
  )
}

export { Header }