import React from 'react'
import TitleCard from '../Customs/Tools/TitleCard'
import {GitHub , LinkedIn, Instagram, Twitter} from '@mui/icons-material'


import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <h1>Contact</h1>  
        <div className='formCard'>
        <TitleCard title="Connect with me" />
        <p>If you want to more about me or my work. pls contact me...</p>
        <div>
            <form onSubmit={(e)=>e.preventDefault()}>
                <label>Name</label> <br></br>
                <input className='ContactField plc' placeholder='Enter your name here...'></input> <br></br>
                <label>Email</label> <br></br>
                <input className='ContactField plc' type="email" placeholder='Enter your email here...'></input> <br></br>
                <label>Message</label> <br></br>
                <textarea className='plc' placeholder='Enter your Mesage'></textarea> <br></br>
                <button>Submit</button>
            </form>
        </div>
            <div className='reachUs'>
            <h2>Email</h2>
            <a href='mailto:https://mail.google.com/mail/u/0/#inbox?compose=new' target="_blank">asfaqali586@gmail.com</a>
            <h2>Social</h2>
            <a href="https://github.com/" target="_blank">
            <GitHub fontSize='large' className='socialIcons'/>
            </a>
            <a href='www.linkedin.com/in/asfak-ali-56662b1a3' target="_blank">
            <LinkedIn fontSize='large' className='socialIcons'/>
            </a>
            <a href='https://www.instagram.com/asfaqali_azu/' target="_blank">
            <Instagram fontSize='large' className='socialIcons'/>
            </a>
            <a href='https://twitter.com/Asfaqal07999420' target="_blank">
            <Twitter fontSize='large' className='socialIcons'/>
            </a>
            </div>
        </div>
      </div>
  )
}

export default Contact