import React from 'react'
import {FaGraduationCap,FaSchool} from 'react-icons/fa'

const EducationCard = () => {
  return (
    <>
    <div className="education_card_container">
    <div className="education_icon">
            <FaGraduationCap/>
        </div>
        <div className="education_card_content">
            <p>2022-2023</p>
            <h3>Full Stack Development(MERN Specialization)</h3>
            <p>NxtWave</p>
        </div>
        </div>
    <div className="education_card_container">
        <div className="education_icon">
            <FaGraduationCap/>
        </div>
        <div className="education_card_content">
            <p>2016-2020</p>
            <h3>BTech Instrumentation Engineering</h3>
            <p>Government College of Engineering, Jalgaon</p>
        </div>
    </div>
    <div className="education_card_container">
    <div className="education_icon">
        <FaSchool/>
    </div>
    <div className="education_card_content">
        <p>2014-2016</p>
        <h3>HSC</h3>
        <p>Shankarrao Bande Arts & Science Junior College, Warud</p>
    </div>
</div>
    <div className="education_card_container">
    <div className="education_icon">
        <FaSchool/>
    </div>
    <div className="education_card_content">
        <p>2013-2014</p>
        <h3>SSC</h3>
        <p>New Orange City Convent, Warud</p>
    </div>
</div>
</>
  )
}

export default EducationCard