import React, { useState } from 'react';
import {Menu} from '@mui/icons-material'

import "./Header.css";



const Header = ({activeNav,homeScroll,aboutScroll,serviceScroll,projectScroll,contactScroll}) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);
  return (
    <div id="homePage">
    <header className='header'>
      <Menu className='menuBar' onClick={handleToggle}/>
        <h3>Asfaq Ali</h3>
        <ul className={`menuList ${toggle ? '' :'hidden'}`} tabIndex="1">
            <li onClick={homeScroll}  className={activeNav === "bannerPage" ? 'activeButton':''}>Home</li>
            <li onClick={aboutScroll} className={activeNav === "about_me" ? 'activeButton':''}>About me</li>
            <li onClick={serviceScroll}  className={activeNav === "servicePage" ? 'activeButton':''}>Services</li>
            <li onClick={projectScroll}  className={activeNav === "projectPage" ? 'activeButton':''}>Projects</li>
            <li onClick={contactScroll}  className={activeNav === "contactPage" ? 'activeButton':''}>Contact</li>
        </ul>
    </header>
    </div>
  )
}

export default Header;