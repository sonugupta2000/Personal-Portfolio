import React from 'react';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import From from "../components/From";

const Contact = () => {
  return (
    <div> 
      <Navbar/>
      <Heroimg2 heading="CONTACT." text="Lets have a chat
 "/>
      <From />


      <Footer/>
    </div>
  );
};

export default Contact;