import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Experience from './components/Experience/Experience';
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Nav from './components/nav/Nav';
const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Contact />
    <Footer />
    </>
  )
}

export default App