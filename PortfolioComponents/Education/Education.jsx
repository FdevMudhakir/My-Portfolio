import React from 'react'
import './Education.css'
import MyEducationData from '../../assets/MyEducationData/MyEducationData'
const Education = () => {
  return (
    <div id='education' className='education'>
      <div className="education-title">
        <h1>My Education</h1>
        {/* <img src="./react.png" alt=""/> */}
        {/* <p>Here are some of my skills on which i have been working on for the past 5+ years.</p> */}
      </div>
      <div className="education-title">
      <p>My education has been a journey of self-discovery and growth. My educational details are as follows.</p>
      </div>
      <div className="education-container">
        {
          MyEducationData.map((service, index) => {
            return(
              <div key={index}  className="education-format">
                {/* <h3>{service.s_no}</h3> */}
                <h2>{service.s_name}</h2> 
                <p>{service.s_desc}</p>
                <div className="education-readmore">
                  <p>Read More</p>
                  <img src="" alt="arrow_icon"/>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Education
