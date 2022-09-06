import React from 'react'

const Servicecard = ({title,image,desc}) => {
  return (
    <div className='serviceCardcontain' data-aos="zoom-in-right" data-aos-duration="700">
      <img src={image} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

export default Servicecard;