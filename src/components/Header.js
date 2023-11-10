import React from 'react'
import profileImage from "../assest/img/Image.jpg"
import Resume from '../assest/img/Roshan_resume.pdf'
const Header = () => {
  return (
    <div className="header-container" id='home'>
          <div className="header-left">
            <div className="profile-image">
              <img src={profileImage} alt="" />
            </div>
          </div>
          <div className="header-right">
            <div className="header-right-content">
              <h3>MERN Stack Developer</h3>
              <h1>Roshan Sawlani</h1>
              <p>I am passionate about developing a better world through technology. I graduated from the Government College of Engineering, Jalgaon, with a BTech in Instrumentation Engineering. I have always been an analytical problem solver. Developing projects has strengthened my capabilities in problem-solving, including a keen attention to detail and accuracy. </p>
              <div className="header-right-button">
                <a href={Resume}><button>Download Resume</button></a>
                <a href="#contact"><button>Contact</button></a>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Header