import React, { useRef } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate;

const Navbar = () => {
  const [menu, setMenu] = React.useState("home");
  const menuRef = useRef();


  const openMenu = () => {
    menuRef.current.style.right = "0"
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-350px"
  }


  return (
    <div className='navbar' id='scroller'>
      <img src="coder.jpg" alt="" />
      <div className="fdev_portfolio">Fdev Portfolio
        {/* <AnchorLink className='anchor-link' offset={50} href='/github'></AnchorLink> */}
      </div>
      <img src="./menu_icon.jpg" onClick={openMenu} alt="toggle_icon" 
      className='nav-mob-open' style={{width:'40px', height:'40px'}}/>
      <ul ref={menuRef} className="nav-menu">
        <li onClick={closeMenu}><AnchorLink className='anchor-link' href=''><p onClick={() => { setMenu("home") }}>Home</p></AnchorLink> {menu == "home" ? <hr /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => { setMenu("about") }}>About</p></AnchorLink>{menu == "about" ? <hr /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#skills'><p onClick={() => { setMenu("skills") }}>Skills</p></AnchorLink>{menu == "skills" ? <hr /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#experience'><p onClick={() => { setMenu("experience") }}>Experiences</p></AnchorLink>{menu == "experience" ? <hr /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => { setMenu("services") }}>Services</p></AnchorLink>{menu == "services" ? <hr /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => { setMenu("work") }}>Projects</p></AnchorLink>{menu == "work" ? <hr /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#education'><p onClick={() => { setMenu("education") }}>Education</p></AnchorLink>{menu == "education" ? <hr /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href=''><p onClick={() => { setMenu("github") }}>GitHub</p></AnchorLink>{menu == "github" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-connect">
        <AnchorLink 
          className='anchor-link' 
          offset={50} 
          href='#contact'>Connect With Me
        </AnchorLink>
      </div>
      <AnchorLink className='anchor-link' offset={50} href='#scroller'>
        <img src="./up1.jpg" alt="" className="nav_scroller" onClick={() => { setMenu("home") }}
          style={{ fontSize: '5px' }} />
      </AnchorLink>{menu === "home" ? "" : <></>}
    </div>
  )
}

export default Navbar
