import React from 'react'

import './common.css'
const Skillcard = ({title,image}) => {
  return (
    <div className='skillCard'  data-aos="fade-up">
        <img src={image} alt=""/>
        <p>{title}</p>
    </div>
  )
}



export default Skillcard;
