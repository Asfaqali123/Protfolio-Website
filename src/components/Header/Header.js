import React, { useState } from 'react';
import {Menu} from '@mui/icons-material'

import "./Header.css";


const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className='header'>
      <Menu className='menuBar' onClick={handleToggle}/>
        <h3>Asfaq Ali</h3>
        <ul className={`menuList ${toggle ? '' :'hidden'}`} tabIndex="1">
            <li >Home</li>
            <li>About me</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
    </header>
  )
}

export default Header;