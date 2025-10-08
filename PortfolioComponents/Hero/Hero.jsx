import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src="./coder.jpg" alt="Profile_Img" style={{borderRadius:'50%'}}/>
        <h1><span>I'm FdevMudhakir,</span> FullStack Web Developer based in Lagos, Nigeria</h1>
        <p>I'm a FullStack web developer from Lagos, Nigeria with over 5 years of experience in building FullStack web-based application</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero
