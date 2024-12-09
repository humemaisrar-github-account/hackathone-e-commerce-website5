
 import React from 'react'
 
import Nav from '../components/nav'
import Topbar from '../components/topbar'
 
import Footer from '../components/footer'
import Producthero from '../components/producthero'
import Productitem from '../components/productitem'
 
 const About = () => {
   return (
     <div>
       <Topbar/>
       <Nav/>
        <Producthero />
        <Productitem/>
        <Footer/>
     </div>
   )
 }
 
 export default About