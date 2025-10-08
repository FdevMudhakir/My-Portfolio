import React from 'react'
import './MyWorks.css'
import MyWorkData from '../../assets/MyWorkData/MyWork_data'
const MyWorks = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Projects</h1>
            {/* <img src="./coder.jpg" alt="" style={{width:'200px'}}/> */}
        </div>
        <div className="mywork-container">
            {
                MyWorkData.map((work,index) => {
                    return <img src={work.src} key={index} alt="" />
                })
            }
        </div>
        <div className="mywork-showmore">
            <p>Show more</p>
            <img src="" alt="arrow_icon" />
        </div>
    </div>
  )
}

export default MyWorks
