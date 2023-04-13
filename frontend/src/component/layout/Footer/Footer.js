import React from "react";
import "./Footer.css"
const Footer = () => {
  return (
    <footer id="footer">

  <div className = "leftFooter">
   <h4>About Us</h4>
   <a href = "http://www.banasthali.org/banasthali/wcms/en/home/" >Banasthali Vidyapith</a>
   <p>BV Shopping site is a website that allows student and faculty  to buy and sell physical goods, services, and digital products over the internet rather than going outside.</p>
  </div>

  <div className = "midFooter">
    <h1>BV shopping Site</h1>
    <p>Banasthali students convenience ,Better Prices,
Variety ,Time-Saving  is ours first priority</p>
    <p>Copyrights 2023 @Banasthali Vidyapith</p>
  </div>
    
  <div className = "rightFooter">
    <h4>Follow Us </h4>
    <a href = "https://www.facebook.com/banasthali.org" >Facebook</a>
    <a href = "https://www.linkedin.com/school/banasthali-vidyapith/" >Linkedin</a>
  </div>
  </footer> 

  )
}

export default Footer;
