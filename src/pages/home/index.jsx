import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Carousel } from "react-bootstrap";

function Home(){
  return(
    <>
      <Header />
      <Carousel>
      </Carousel>     
      <Footer />
    </>
  )
}

export { Home }