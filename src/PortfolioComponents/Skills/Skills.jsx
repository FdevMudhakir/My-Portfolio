import React from 'react'
import './Skills.css'
import MySkillsData from '../../assets/MySkillsData/MySkillsData'
const Skills = () => {
  return (
    <div id='skills' className='skills'>
      <div className="skills-title">
        <h1>My Skills</h1>
        {/* <img src="./react.png" alt=""/> */}
        {/* <p>Here are some of my skills on which i have been working on for the past 5+ years.</p> */}
      </div>
      <div className="skills-title">
        <p>Here are some of my skills on which i have been working on for the past 5+ years.</p>
      </div>
      <div className="skills-container">
        {
          MySkillsData.map((skill, index) => {
            return(
              <div key={index}  className="skills-format">
                <h3>{skill.skill_no}</h3>
                <h2>{skill.skill_name}</h2>
                <p>{skill.skill_desc}</p>
                <div className="skills-readmore">
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

export default Skills
