import "./FromStyle.css";
import React from "react";

const From = () => {
  return (
    <div className="form">
  <form>
    <label htmlFor="name">Your Name</label>
    <input type="text" id="name" name="name" />

    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" />

    <label htmlFor="subject">Subject</label>
    <input type="text" id="subject" name="subject" />

    <label htmlFor="message">Message</label>
    <textarea rows="6" id="message" name="message" placeholder="Type your message here"></textarea>

    <button type="submit" className="btn">Submit</button>
  </form>
</div>
  );
  
}; 

export default From;