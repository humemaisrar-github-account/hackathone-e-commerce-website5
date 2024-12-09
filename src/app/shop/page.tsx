 
 

 
 
import Shopitems from "../components/shopitems";
import Shopnav from "../components/shopnav";
import Shopproduct from "../components/shopproduct";
import Shoptop from "../components/shoptop";

const Home = () => {
  return (
    <div>
       <Shoptop/>
       <Shopnav />
       <Shopitems/>
       <Shopproduct />
       
      
    </div>
  );
};

export default Home;
