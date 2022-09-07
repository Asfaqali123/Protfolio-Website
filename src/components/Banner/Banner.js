import React, { useState } from 'react';
import {GitHub , LinkedIn, Instagram, Twitter} from '@mui/icons-material';
import Typewriter from 'typewriter-effect';
 
import './Banner.css';

const Banner = () => {

  return (
    <div className ='banner'>
      <div className='banner1'>
        <p className='title'>Hi, I am Asfaq</p>
        <p className='popupWord'>
          <Typewriter  options={{
            autoStart:true,
            loop:true,
            delay:40,
            strings:[
              'I am Web Developer',
              'I am FullStack Developer',
            ]

          }}/>
        </p>
        <p >I am a Front-End / Full-Stack Developer.</p>
        <div className='socialIcons'>
          <GitHub fontSize='large' className='gitSocialIcons'/>
          <LinkedIn fontSize='large' className='linkSocialIcons'/>
          <Instagram fontSize='large' className='instaSocialIcons'/>
          <Twitter fontSize='large' className='tweeSocialIcons'/>
        </div>
        <div>
          <button className='resumeButton'>Resume</button>
        </div>
      </div>
      <div className="banner2">
        <img src='https://aakash-sharma.netlify.app/static/media/webdev.4d72dbba32efee3890cef9bcacce7aa7.svg'></img>        
      </div>
    </div>
  )
}

export default Banner;