import { ArrowForward } from '@mui/icons-material'
import React from 'react'

const ProjectCard = ({title,image,desc,}) => {
  return (
    <div className='projectCardscontain'>
      <div className='Projectimage'>
        <img src={image} alt={title}></img>
      </div>
      <div className='ProjectDetail'>
        <h3>{title}</h3>
        <p>{desc}</p>
        <button> <span>Know More</span><ArrowForward fontSize='small'/></button>
      </div>
    </div>
  )
}

export default ProjectCard