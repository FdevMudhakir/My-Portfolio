import React from 'react'
import './Contact.css'
// import mail_icon
// import location_icon
// import call_icon

const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src="" alt="getInTouchIcon" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk...</h1>
                <p>I'm always available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src="./gmail.jpg" alt="email_icon" />
                        <p>fdevmudhakir@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src="./call.jpg" alt="call_icon" />
                        <p>+2348165973985</p>
                    </div>
                    <div className="contact-detail">
                        <img src="./location.jpg" alt="location_icon" />
                        <p>Lagos, Nigeria</p>
                    </div>
                </div>
            </div>
            <form className="contact-right">
                <label htmlFor="">Your Name:</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email:</label>
                <input type="email" placeholder='Enter your email'  name="email"/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows='8' placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
