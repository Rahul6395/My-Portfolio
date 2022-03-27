import React from 'react';
import "./Header.css";
import {BsLinkedin,BsInstagram,BsGithub,BsFacebook} from "react-icons/bs";
import flo from "../img/borderImg.jpg";

const Header = () => {
    return (
        <>
         <div className="header">
          <div className="headerDf">
             <div className="headerText">
                 <h1 className="headerHeading">Rahul <br/>Gupta</h1>
                 <h3 className="headerpgh">Frontend  Developer</h3>
                 <div className="headerIcon">
                     <a href="https://www.linkedin.com/in/rahul-gupta-806987226/" target="_blank" className="iconheader"><BsLinkedin/></a>
                     <a href="https://www.instagram.com/rahulgupta7328/" className="iconheader"><BsInstagram/></a>
                     <a href="https://github.com/Rahul6395" className="iconheader"><BsGithub/></a>
                     <a href="" className="iconheader"><BsFacebook/></a>
                 </div>
                 <a href="mailto:rahulgupta55521@gmail.com" className='chatbtn'>Let's Chat</a>
             </div> 
             <div className="headerImg">
               <img src={flo} alt="flower" className="rahulImg" />    
             </div> 
          </div>     
        </div>   
        </>
    )
}

export default Header
