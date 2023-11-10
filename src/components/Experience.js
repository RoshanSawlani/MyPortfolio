import React from 'react'
import experienceImage from "../assest/img/Gif Animation.gif"
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  return (
    <div className="experience" id='experience'>
            <h1 className='heading'>Experience</h1>
            <div className='experience_content'>
            <div className="experience_left">
              <ExperienceCard/>
              
            </div>
            <div className="experience_right">
              <div className="experience_image">
                <img src={experienceImage} alt="" />
              </div>
            </div>
              </div>
          </div>
  )
}

export default Experience