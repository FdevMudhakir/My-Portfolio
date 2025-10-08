import React from 'react'
import './Experience.css'
import MyXperienceData from '../../assets/MyXperienceData/XperienceData'
const Experience = () => {
  return (
    <div id='experience' className='experience'>
      <div className="experience-title">
        <h1>My Xperiences</h1>
        {/* <img src="./react.png" alt=""/> */}
        {/* <p>Here are some of my skills on which i have been working on for the past 5+ years.</p> */}
      </div>
      <div className="experience-title">
      <p>My Work Xperience as a Software Engineer and working on different Projects.</p>
      </div>
      <div className="experience-container">
        {
          MyXperienceData.map((xperience, index) => {
            return(
              <div key={index}  className="experience-format">
                {/* <h3>{xperience.s_no}</h3> */}
                <h2>{xperience.s_name}</h2>
                <p>{xperience.s_desc}</p>
                <p>{xperience.skills}</p>
                <div className="experience-readmore">
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

export default Experience
