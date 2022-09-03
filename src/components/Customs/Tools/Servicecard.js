import React from 'react'

const Servicecard = ({title,image,desc}) => {
  return (
    <div className='serviceCardcontain'>
      <img src={image} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

export default Servicecard;