import React from 'react'
import NxtImage from '../assest/img/download.jpg'
import EmojiImage from '../assest/img/emoji.jpg'
import TypeImage from '../assest/img/speedtype.jpg'
import ProjectCard from './ProjectCard';
const Project = () => {
  return (
    <div className="project" id='project'>
    <h1 className='heading text-center'>Project</h1>
    <div className="project_content">
      <ProjectCard name="Nxt Trendz ( ECommerce Clone - Amazon, Flipkart)" url="https://roshannxtrendz.ccbp.tech" img={NxtImage}/>
      <ProjectCard name="Emoji Game" url="https://roshanemojigame.ccbp.tech" img={EmojiImage}/>
      <ProjectCard name="Typing Speed Test" url="https://roshantest.ccbp.tech/" img={TypeImage}/>
    </div>
  </div>
  )
}

export default Project