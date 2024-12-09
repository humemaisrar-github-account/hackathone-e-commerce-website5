import Image from "next/image";
import Topbar from "./components/topbar";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Herobottom from "./components/herobottom";
import Product1 from "./components/product1";
import Feature from "./components/feature";
import Footer from "./components/footer";
 
 

export default function Home() {
  return (
     <div>
      <Topbar />
      <Nav />
      <Hero />
      <Herobottom />
      <Product1 />
      <Feature />
      <Footer />
       
      
     </div>
  );
}
