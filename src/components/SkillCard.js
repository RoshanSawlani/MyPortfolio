import React from 'react'

const SkillCard = ({url}) => {
  return (
    <div className='skillCard_container'>
      <div className='skillCard_image'>
        <img src={url} alt="" />
      </div>
    </div>
  )
}

export default SkillCard