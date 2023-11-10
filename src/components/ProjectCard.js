import React from 'react'
import SkillCard from './SkillCard'

const ProjectCard = ({url,name,img}) => {
  return (
    <>
    <div className='project_card'>
         <a href={url}>
        <SkillCard url={img}/>
        <h3>{name}</h3>
        </a>   
    </div>
    
    </>
  )
}

export default ProjectCard