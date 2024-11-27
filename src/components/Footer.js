import "./FooterStyle.css";

import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaTwitter, } from "react-icons/fa";

const Footer  = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="Location">
                    <FaHome size={20} style={{color:
                        "#fff", marginRight: "2rem"}}/>
                        <div>
                            <p>Bajrang Nagar Rania kanpur dehat</p>
                            <p>Uttar Pradesh-209304</p>
                        </div>
                    
                    

                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:
                        "#fff", marginRight: "2rem"}}/> 
                        8188056834 </h4>
                

                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{
                        color: "#fff", marginRight: "2rem"}}/> 
                        sonuij8188@gmail</h4>
                

                </div>
            </div>

            <div className="right">
                <h4>PROFESSIONAL EXPERIENCE</h4>
                <p>Data Engineer
                 Bajaj Finance Ltd (Internship)
                The title and scope of his project was "Tampering Detection: 
                Detecting Photo Manipulation 
                with Deep Learning models. 
                My project is IOT based samrt wheelchair for paralysis patient  
                  </p>
            <div className="Social">
            <FaLinkedin size={30} style={{
                        color: "#fff", marginRight: "2rem"}}
                        />
            <FaTwitter size={30} style={{
                        color: "#fff", marginRight: "2rem"}}
                        />  

            </div>
            </div>
        </div>
         </div>
  );
};

export default Footer;