import React from 'react'
import './Footer.css'
// import { Link } from 'react-router-dom'
// import {useNavigate}  from 'react-router-dom'
// import footer_logo

// const navigate = React.useNavigate();
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src="" alt="footer_top_logo" />
                <p>I'm a FullStack web developer from, Lagos Nigeria, with 5+ years 
                  of experience in Personal development.
                </p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src="./profile1.jpg" alt="user_icon" />
                    <input type="email" placeholder='Enter your email' style={{color:'white'}}/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">C 2025 Fdev Mudhakir. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
      <div className="footer-bottom-center">
        <a href=""><img src="./whatsApp.jpg" alt="WhatsApp_img" /></a>
        <a href=""><img src="./facebook.jpg" alt="Facebook_img" /></a>
        <a href=""><img src="./twitter.jpg" alt="X(Twitter)_img" /></a>
        <a href=""><img src="./tiktok.jpg" alt="TikTok_img" /></a>
        <a href=""><img src="./instagram.jpg" alt="Instagram_img" /></a>
        <a href=""><img src="./telegram.jpg" alt="Telegram_img" /></a>
        <a href=""><img src="./SMS.jpg" alt="SMS" /></a>
        <a href=""><img src="./call.jpg" alt="Direct_call" /></a>
        <a href=""><img src="./gmail.jpg" alt="Gmail" /></a>
        {/* <a href=""><img src="./" alt="Linkedln_img" /></a> */}
        </div>
    </div>
  )
}

export default Footer
