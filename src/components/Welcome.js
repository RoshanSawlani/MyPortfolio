import React from 'react'
import helloImage from '../assest/img/hello.gif'

const Welcome = () => {
  return (
    <div className="welcome_container" id='about'>
            <div className="welcome_left">
              <h1>Welcome to Roshan's World!</h1> 
              <p>My name is Roshan Sawlani,  I'm from Warud, Maharashtra and I'm a passionate MERN Stack Developer.</p>
              <p>I am a passionate individual who always strives to work on end-to-end products that develop sustainable and scalable social and technical systems to create an impact. I am also a strong believer that imagination brings about change and shows a path to develop something amazing and interesting.</p>
            </div>
            <div className="welcome_right">
              <div className="welcome_image">
                <img src={helloImage} alt=''/>
              </div>
            </div>
          </div>
  )
}

export default Welcome