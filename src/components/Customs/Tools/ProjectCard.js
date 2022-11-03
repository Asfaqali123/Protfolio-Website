import { ArrowForward } from '@mui/icons-material'
import React from 'react'

const ProjectCard = ({title,image,desc,butn}) => {
  return (
    <div className='projectCardscontain' data-aos="fade-up">
      <div className='Projectimage'>
        <img src={image} alt={title}></img>
      </div>
      <div className='ProjectDetail'>
        <h3>{title}</h3>
        <p>{desc}</p>
        <button><a href={butn} className="projecturl">Know More</a><ArrowForward fontSize='small'/> </button>
      </div>
    </div>
  )
}

export default ProjectCard