import "./HeroimgStyle.css";

import React from 'react';
import sonu4 from "../assets/sonu4.jpg";
import { Link } from "react-router-dom";

const Heroimg  = () => {
  return(
     <div className="hero"> 
    <div className="mask">
        <img className="sonu4" src={sonu4} alt="sonu4"/>

    </div>
    <div className="content">
        <h3>HELLO I AM A SONU GUPTA</h3>
        <h3>I am persuing B.TECH from PSIT,Kanpur</h3>
        <h1>Software Developer</h1>
        <div>
            <Link to="/Project"
            className="btn">
                Project
            </Link>
             <Link to="/Contact"
            className="btn btn-light">
                Contact
            </Link>
        </div>


    </div>
    </div>
  );
  
};

export default Heroimg;