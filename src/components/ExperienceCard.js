import React from 'react'
import {FaIndustry} from 'react-icons/fa'

const ExperienceCard = () => {
return (
    <>
    <div className="experience_card_container">
        <div className="experience_icon">
            <FaIndustry/>
        </div>
        <div className="experience_card_content">
            <p>Jul'20-Aug21</p>
            <h3>Graduate Engineer Trainee</h3>
            <p>Dhoot Transmission Private Limited Aurangabad</p>
        </div>
    </div>
    <div className="experience_card_container">
    <div className="experience_icon">
        <FaIndustry/>
    </div>
    <div className="experience_card_content">
        <p>Aug'21-Dec'21</p>
        <h3>Instrumentation Technician</h3>
        <p>Morganite Crucibles India Limited, Aurangabad</p>
    </div>
</div>
    <div className="experience_card_container">
    <div className="experience_icon">
        <FaIndustry/>
    </div>
    <div className="experience_card_content">
        <p>Mar'23-May'23</p>
        <h3>Full Stack Developer Intern</h3>
        <p>Solar Secure Solutions</p>
    </div>
</div>
</>
)
}

export default ExperienceCard