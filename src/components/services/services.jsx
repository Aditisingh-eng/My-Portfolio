import React from 'react'
import './services.css';
import {BiCheck} from 'react-icons/bi';
const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
             <BiCheck className='service__list-icon'/>
             <p>Create Mind Maps</p>
            </li>
            <li>
             <BiCheck className='service__list-icon'/>
             <p>Create Wireframes</p>
            </li>
            <li>
             <BiCheck className='service__list-icon'/>
             <p>UI/UX Concept</p>
            </li>
            <li>
             <BiCheck className='service__list-icon'/>
             <p>Create Figma Design</p>
            </li>
            <li>
             <BiCheck className='service__list-icon'/>
             <p>Clickable Prototype With UI Kit</p>
            </li>
            <li>
             <BiCheck className='service__list-icon'/>
             <p>Visual Design/Motion Design</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
             <BiCheck className='service__list-icon'/>
             <p>SEO Friendly</p>
            </li>
            <li>
             <BiCheck className='service__list-icon'/>
             <p>Mobile Responsive Websites</p>
            </li>
            <li>
             <BiCheck className='service__list-icon'/>
             <p>E-Commerce Website Designs</p>
            </li>
            <li>
             <BiCheck className='service__list-icon'/>
             <p>Marketplace Website Design</p>
            </li>
            <li>
             <BiCheck className='service__list-icon'/>
             <p>Small Business Websites</p>
            </li>
            <li>
             <BiCheck className='service__list-icon'/>
             <p>FrontEnd Services/Backend Services</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
             <BiCheck className='service__list-icon'/>
             <p>Content that converts</p>
            </li>
            <li>
             <BiCheck className='service__list-icon'/>
             <p>Speaks directly to audience</p>
            </li>
            <li>
             <BiCheck className='service__list-icon'/>
             <p>Coversation around your brand</p>
            </li>
            <li>
             <BiCheck className='service__list-icon'/>
             <p>Blog Writing</p>
            </li>
          </ul>
        </article>
      </div>

    </section>
  )
}

export default services