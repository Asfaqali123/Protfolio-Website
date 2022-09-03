import React from 'react'

import './common.css'
const Skillcard = ({title,image}) => {
  return (
    <div className='skillCard'>
        <img src={image}/>
        <p>{title}</p>
    </div>
  )
}



export default Skillcard