import React from "react";
import Navbar from "../components/Navbar";
import Heroimg from "../components/Heroimg";
 
import Footer from "../components/Footer";
import TricingCard1 from "../components/TricingCard1";
 

const Home = () => {
  return (
    <div>
      <Navbar />
      <Heroimg/>
      <TricingCard1 />
       
     
      <Footer/>
    </div>
  );
};

export default Home;