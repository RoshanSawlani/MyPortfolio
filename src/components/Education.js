import React from 'react'
import educationImage from "../assest/img/education.gif"
import EducationCard from './EducationCard';

const Education = () => {
  return (
    <div className="education" id='education'>
            <h1 className='heading'>Education</h1>
            <div className='education_content'>
            <div className="education_left">
              <EducationCard/>
              
            </div>
            <div className="education_right">
              <div className="education_image">
                <img src={educationImage} alt="" />
              </div>
            </div>
              </div>
          </div>
  )
}

export default Education