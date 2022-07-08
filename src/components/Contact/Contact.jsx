import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md';
import {FiLinkedin} from 'react-icons/fi';
import {GrInstagram} from 'react-icons/gr';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_drck5ye', 'template_b9yc3ea', form.current, 'N_NbZBarUxlW1kFUF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>EMail</h4>
            <h5>aditisingh1156@gmail</h5>
            <a href='mailto:aditisingh1156@gmail.com' target="_blank">Send a Message</a>
          </article>
          <article className='contact__option'>
            <FiLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Aditi Singh Linkedin</h5>
            <a href='https://www.linkedin.com/in/aditi-singh2001' target="_blank">Send a Message</a>
          </article>
          <article className='contact__option'>
            <GrInstagram className='contact__option-icon'/>
            <h4></h4>
            <h5>aditii_singh0629</h5>
            <a href='https://www.instagram.com' target="_blank">Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact