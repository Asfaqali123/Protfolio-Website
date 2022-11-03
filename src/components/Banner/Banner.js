import React from 'react';
import {GitHub , LinkedIn, Email, Twitter} from '@mui/icons-material';
import Typewriter from 'typewriter-effect';
 
import './Banner.css';

const Banner = ({homeRef}) => {

  return (
    <div className ='banner' ref={homeRef} id="bannerPage">
      <div className='banner1'>
        <p className='title'>Hi, I am Asfaq</p>
        <span className='popupWord'>
          <Typewriter  options={{
            autoStart:true,
            loop:true,
            delay:40,
            strings:[
              'I am Web Developer',
              'I am FullStack Developer',
            ]

          }}/>
        </span>
        <p >I am a Fullstack Developer | Frontend Developer .</p>
         <div className='socialIcon'>
          <a href='https://github.com/Asfaqali123'><GitHub fontSize='large' className='gitSocialIcons'/></a>
          <a href='www.linkedin.com/in/asfak-ali-56662b1a3'><LinkedIn fontSize='large' className='linkSocialIcons'/></a>
          <a href='mailto:asfaqali586@gmail.com'><Email fontSize='large' className='instaSocialIcons'/></a>
          <a href='https://twitter.com/Asfaqal07999420'><Twitter fontSize='large' className='tweeSocialIcons'/></a>
        </div>
        <div>
          <a href="resume.pdf" download="Resume.pdf" >
          <button className='resumeButton'>Resume</button>
          </a>
        </div>
      </div>
      <div className="banner2">
        <img src='https://aakash-sharma.netlify.app/static/media/webdev.4d72dbba32efee3890cef9bcacce7aa7.svg' alt=''></img>        
      </div>
    </div>
  )
}

export default Banner;