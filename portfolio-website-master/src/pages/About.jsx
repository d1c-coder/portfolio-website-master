import React from 'react'
import "./CSS/About.css"
import Navbar from "../components/Navbar/Navbar"
import SocialMedia from '../components/SocialMedia/SocialMedia'


const About = () => {
  return (
    
    <div className='about'>
      <Navbar className="navbarAbout"/>
      <SocialMedia className="socialmediaAbout"/>

     <div className= "about-content">
     <p>I am currently a secondary school science student I mainly work with php and flutter for app development</p>
    <br />
     <br />
     <p>I have a keen interest in Web 3 technologies. Proficient in HTML, CSS, and JavaScript, I enjoy working with modern frameworks like React and Tailwind CSS. My aim is not just to write code, but to develop aesthetically pleasing and high-performance web applications.</p><br />
     <br />
     <p>I love building practical projects , and freelace project to improve my self</p>
     </div>
     <div className="man-img">
    
     </div>
      
    </div>
  )
}

export default About
