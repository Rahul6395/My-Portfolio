import React from 'react';
import "./About.css";
import { FaCloudDownloadAlt } from "react-icons/fa";


const About = () => {
    return (
        <>
        <div className="aboutMeSec">
            <div className="aboutMe">
                <h1 className="aboutHead">About Me</h1>
                <p className="aboutKnow">
                Hello! I'm Rahul, I am a self-motivated Web Developer.
                 I am extremely proficient in Front-End Development using
                  HTML5, Cascade Style Sheets (CSS3), Bootstrap, Javascript, 
                  React.Js, and continuously engage in trying to extend my 
                  skills with new technology person slightly obsessed with code quality.
                   I'm passionate and hardworking with a penchant for meeting deadlines. Interested in
                 exploring things and learning new things. I’m currently looking for opportunities.
                </p>
                <div className="dowresume">
                <a target="_blank" href=".pdf" class="custom-button dIcons"> <FaCloudDownloadAlt style={{paddingRight:'3px',width:"30px"}}/>Download Resume</a>
            </div>
            </div>
        </div>
        </>
    )
}

export default About;

