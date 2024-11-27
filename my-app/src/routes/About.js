import React from 'react';
import Navbar from "../components/Navbar";
import Heroimg2 from "../components/Heroimg2";
import AboutContent from "../components/AboutContent";
 
import Footer from "../components/Footer";


const About = () => {
  return (
    <div>
       <Navbar/>
       <Heroimg2 heading="ABOUT." text="I am a Software Developer"/>
       <AboutContent/>

 
 
 
       <Footer/>
    </div>
  );
};

export default About;