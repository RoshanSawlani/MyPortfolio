import React, { useState } from 'react';
import { MdEmail, MdLocationPin, MdPhoneInTalk } from 'react-icons/md';
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwIMXVIV55QOWqHl807aMWjDXzUjSlq4A1f2liZiW2AQ1TdY9uoBuH4K8FE4F9J3ryLuA/exec';

    
    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(e.target),
    })
      .then((response) => {
        if (response.ok) {
          setMessage('Message sent successfully');
          setTimeout(() => {
            setMessage('');
            setFormData({ name: '', email: '', message: '' });
          }, 5000);
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .catch((error) => {
        console.error('Error!', error.message);
      });
  };
  return (
    <div className="contact" id="contact">
      <h1 className="heading">Contact Us</h1>
      <div className="contact_content">
        <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            type="text"
            placeholder="Your message"
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">
            Submit
          </button>
        </form>
        
            <div className="socialMedia">
              <div className="socialMedia_item">
                <MdEmail/>
                <p>roshansawlani@gmail.com</p>
              </div>
              <div className="socialMedia_item">
                <MdPhoneInTalk/>
                <p>+91 9021233422</p>
              </div>
              <div className="socialMedia_item">
                <MdLocationPin/>
                <p>Warud, Maharashtra</p>
              </div>

              <div className="socialMedia_personal">
                <a href="https://www.linkedin.com/in/roshan-sawlani-9611391b8/"><SiLinkedin/></a>
                <a href="https://instagram.com/er_roshan_sawlani?igshid=dGhvbXV4OTIxdTJt"><SiInstagram/></a>
                <a href="https://github.com/RoshanSawlani"><SiGithub/></a>
              </div>
              </div>
            </div>
            <span id="msg" className='msg'>{message}</span>
          </div>
  )
}

export default Contact