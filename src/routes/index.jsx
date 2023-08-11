import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { AboutMe } from "../pages/about";
import { Portfolio } from "../pages/portfolio";
import { NotFound } from "../pages/404";

function RoutesApp(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/"/>          
          <Route element={<AboutMe />} path="/about-me"/>          
          <Route element={<Portfolio />} path="/portfolio"/>
          <Route element={<NotFound />} path="*"/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export { RoutesApp }