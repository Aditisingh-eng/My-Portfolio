import React from 'react'
import './Footer.css'
import {FaFacebook} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';
import {IoLogoTwitter} from 'react-icons/io';
const Footer = () => {
  return (
    <footer>
    <a href='#' className='footer_logo'>ADITI</a>
    <ul className='permalinks'>
       <li><a href='#'>Home</a></li>
       <li><a href='#about'>About</a></li>
       <li><a href='#experience'>Experience</a></li>
       <li><a href='#services'>Services</a></li>
       <li><a href='#portfolio'>Portfolio</a></li>
       <li><a href='#contact'>Contact</a></li>
    </ul>
    <div className='footer__socials'>
      <a href='https://facebook.com'><FaFacebook/></a>
      <a href='https://instagram.com'><AiFillInstagram/></a>
      <a href='https://twitter.com'><IoLogoTwitter/></a>
    </div>
    <div className="footer__copyright">
      <small>&copy; Aditi Singh All rights reserved</small>
    </div>
    </footer>
  )
}

export default Footer