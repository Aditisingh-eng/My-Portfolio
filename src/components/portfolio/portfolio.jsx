import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/EventMarket.jpg';
import IMG2 from '../../assets/linked-in.png';
import IMG3 from '../../assets/nifty.jpg';
import IMG4 from '../../assets/GroomUp.png';
import IMG5 from '../../assets/Demo.png';
import IMG6 from '../../assets/Blogs.png';
import { BsLinkedin } from 'react-icons/bs';
const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
             <img src={IMG1} alt=""/>
          </div>
          <h3>Event Ticket Marketplace</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/Aditisingh-eng/Event-Ticket-Marketplace' className='btn' target='_blank'>Github</a>
          <a href="https://event-ticket-marketplace.vercel.app" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>      
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={IMG2} alt=""/>
          </div>
          <h3>Linkedin-Clone</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/Aditisingh-eng/linkedin-clone-as' className='btn' target='_blank'>Github</a>
          <a href="https://linkedin-clone-yt-ca49f.web.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt=""/>
          </div>
          <h3>Stock Market Analysis</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/Aditisingh-eng/group-21-4A-project-Stock-Market-analysis-using-Python-' className='btn' target='_blank'>Github</a>
          <a href="https://github.com/Aditisingh-eng/group-21-4A-project-Stock-Market-analysis-using-Python-" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
             <img src={IMG4} alt=""/>
          </div>
          <h3>Groom Up</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/Aditisingh-eng/GroomUp' className='btn' target='_blank'>Github</a>
          <a href="https://groomup-7f05c.web.app" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
             <img src={IMG5} alt=""/>
          </div>
          <h3>Demo Streaming</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/Aditisingh-eng/demo-street' className='btn' target='_blank'>Github</a>
          <a href="https://aditisingh-eng.github.io/demo-street/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG6} alt=""/>
          </div>
          <h3>Blog Writing</h3>
          <div className='portfolio__item-cta'>
          <a href='https://aditishasha.blogspot.com' className='btn' target='_blank'>Blogspot</a>
          <a href="https://aditishasha.blogspot.com" className='btn btn-primary' target='_blank'>Read Blog</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default portfolio