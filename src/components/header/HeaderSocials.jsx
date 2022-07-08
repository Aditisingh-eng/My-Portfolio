import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {AiTwotoneMail} from 'react-icons/ai';
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/aditi-singh2001' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/Aditisingh-eng' target="_blank"><BsGithub/></a>
        <a href='mailto:aditisingh1156@gmail.com' target='_blank'><AiTwotoneMail/></a>
         
     </div>
  )
}

export default HeaderSocials