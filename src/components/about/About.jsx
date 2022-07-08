import React from 'react'
import './About.css'
import ME from '../../assets/AditiProfile.jpg';
import {BiAward} from 'react-icons/bi';
import {TbTools} from 'react-icons/tb';
import {VscFolderLibrary} from 'react-icons/vsc';
import Experience from './../Experience/Experience';
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className="about__me">
           <div className="about__me-image">
            <img src={ME} alt="About Image" />
           </div>
        </div>
        <div className="about__content">
              <div className="about__cards">
                <article className='about__card'>
                  <BiAward className='about__icon'/>
                  <h5>Experience</h5>
                  <small>3+ Years</small>
                </article>
                <article className='about__card'>
                  <TbTools className='about__icon'/>
                  <h5>Domain</h5>
                  <small>Full Stack Developer</small>
                </article>
                <article className='about__card'>
                  <VscFolderLibrary className='about__icon'/>
                  <h5>Projects</h5>
                  <small>6+ Completed</small>
                </article>
              </div>
              <p>
                I am a Full Stack Developer and a Python Programmer having 3+ years of Experience
                in Web Development, UI/UX Designs and Content Creation. I have a decent knowledge 
                of Object-Oriented Programming as well. I have worked on several technologies and
                their implementation in the real world.
              </p>
              < a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About