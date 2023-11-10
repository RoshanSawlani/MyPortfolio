import './App.css';
import HorizontalLine from './components/horizontalLine';
import  {MdOutlineMenu} from  "react-icons/md"
import Header from './components/Header';
import Welcome from './components/Welcome';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useState } from 'react';
import {AiOutlineClose} from 'react-icons/ai'


function App() {
  const [openMenu,setOpenMenu] = useState(false)
  return (
    <>
      {
        openMenu && <div className='menu_container'>
            <button onClick={()=>setOpenMenu(false)} className='close'><AiOutlineClose/></button>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#project">Project</a>
            <a href="#contact">Contact</a>
          
        </div>
      }
      <header>
        <div className='top'>
          <div className="logo">Roshan</div>
          <MdOutlineMenu onClick={()=>setOpenMenu(true)}/>
        </div>
        <Header/> 
      </header>
      <main>
          <HorizontalLine/>
          <Welcome/>
            <div className="horizontal_reverse">
          <HorizontalLine/>
          </div>
          <Education/>
          <Skills/>
          <Experience/>
          <Project/>
          <Contact/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
