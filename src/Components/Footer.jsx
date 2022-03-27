import React from 'react';
import "./Footer.css";
import {BsLinkedin,BsInstagram,BsGithub,BsFacebook} from "react-icons/bs";

const Footer = () => {
    return (
        <>
         <footer>
           <div className="footerDiv">
               <h1 className="footerheading">Stay Connected</h1>
               <p className="footerAddress">Faridabad Haryana, India</p>
               <a href="mailto:rahulgupta55521@gmail.com"  target="_blank" className="footerMailId"><h2>rahulgupta55521@gmail.com</h2></a>
               <div className="FooterIcon">
                     <a href="https://www.linkedin.com/in/rahul-gupta-806987226/" target="_blank" className="iconFooter"><BsLinkedin/></a>
                     <a href="https://www.instagram.com/rahulgupta7328/" className="iconFooter"><BsInstagram/></a>
                     <a href="https://github.com/Rahul6395" className="iconFooter"><BsGithub/></a>
                     <a href="" className="iconFooter"><BsFacebook/></a>
                 </div>
           </div>
         </footer>   
        </>
    )
}

export default Footer;
