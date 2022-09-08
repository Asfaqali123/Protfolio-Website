import React from 'react'
import ProjectCard from '../Customs/Tools/ProjectCard'
import TitleCard from '../Customs/Tools/TitleCard'

import './Project.css'

const projects = [
  {
    id:1,
    name:"GitHub",
    url:"https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU",
    discription:"about git hub",
    redirectUrl:"https://moonlit-creponne-3d9c0c.netlify.app/"
  },
  {
    id:2,
    name:"PokemonApi",
    url:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png",
    discription:"about PokemonApi",
    redirectUrl:"https://moonlit-creponne-3d9c0c.netlify.app/"
  },
  {
    id:3,
    name:"flipkartClone",
    url:"https://media.glassdoor.com/sqll/300494/flipkart-com-squarelogo-1433217726546.png",
    discription:"about flipkart",
    redirectUrl:"https://moonlit-creponne-3d9c0c.netlify.app/"
  },
  {
    id:4,
    name:"Cardslide",
    url:"https://cc-prod.scene7.com/is/image/CCProdAuthor/design-carousels-sliders_00?$pjpeg$&jpegSize=300&wid=1440",
    discription:"about User Card slider",
    redirectUrl:"https://moonlit-creponne-3d9c0c.netlify.app/"
  },
  {
    id:5,
    name:"loaderimage",
    url:"https://cc-prod.scene7.com/is/image/CCProdAuthor/design-carousels-sliders_00?$pjpeg$&jpegSize=300&wid=1440",
    discription:"about Loader image",
    redirectUrl:"https://moonlit-creponne-3d9c0c.netlify.app/"
  }
]

const Project = ({projectRef}) => {
  return (
    <div className='project' ref={projectRef} id="projectPage">
      <h1>Projects</h1>
      <TitleCard title="What I Build" /> 
        <div className='projectscard'>
        {projects.map((cards) => (
          <ProjectCard key={cards.id} title={cards.name} image={cards.url} desc={cards.discription} butn={cards.redirectUrl} />
        ))}
        </div>
    </div>  
  )
}

export default Project;