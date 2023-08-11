import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

function NotFound(){
  return(
    <>
      <Header />
      <h1>Erro 404! Page not found!</h1>
      <Footer />
    </>
  )
}

export { NotFound }