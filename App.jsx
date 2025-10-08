import React from 'react'
import Navbar from './PortfolioComponents/Navbar/Navbar'
import Hero from './PortfolioComponents/Hero/Hero'
import About from './PortfolioComponents/About/About'
import Services from './PortfolioComponents/Services/Services'
import MyWorks from './PortfolioComponents/MyWorks/MyWorks'
import Contact from './PortfolioComponents/Contact/Contact'
import Footer from './PortfolioComponents/Footer/Footer'
import Skills from './PortfolioComponents/Skills/Skills'
import Experience from './PortfolioComponents/Experiences/Experience'
import Education from './PortfolioComponents/Education/Education'


const App = () => {
  return (
    <>
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Services/>
      <MyWorks />
      <Education />
      <Contact />
      <Footer />
    </div>
    </>
  )
}

export default App
